import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {GalleryInterface} from '../Base-Interface/gallery.Interface';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {TranslateService} from '@ngx-translate/core';
import {PaginateParams} from '../../core/models/paginateParams.interface';
import {GalleryService} from '../../core/services/Gallery-Module/Gallery/gallery.service';
import {FormErrorService} from '../../core/services/FormError.service';
import {AuthNoticeService} from '../../core/services/auth-notice.service';
import {MatDialog} from '@angular/material/dialog';
import {HelperService} from '../../core/services/helper.service';
import {DeleteModalComponent} from '../delete-modal/delete-modal.component';

declare var $: any;


@Component({
	selector: 'kt-gallery',
	templateUrl: './gallery.component.html',
	styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

	@Input() gallery_type = '';

	@Input() selectedImages = [];

	@Input() show_gallery: boolean = false;

	@Input() galleryInterface: GalleryInterface;

	@Input() multiple_images: boolean = true;

	isLoadingResults: boolean = true;
	images: [];


	uploadForm: FormGroup;
	imgURL:any = null;

	headerParams: PaginateParams = {
		active: 1,
		per_page: 500,
		search_key: null,
		sort_key: null,
		sort_order: 'desc',
		next_page_index: 0,
	};

	constructor(private  cdr: ChangeDetectorRef,
				private service : GalleryService,
				private fb: FormBuilder ,
				private formErrorService: FormErrorService,
				private authNoticeService: AuthNoticeService,
				public translateService : TranslateService,
				public dialog: MatDialog,
				private helper: HelperService) {
	}

	ngOnInit() {
		this.get(this.headerParams);
	}

	get(headerParams) {
		this.isLoadingResults = true;
		headerParams.search_key = this.gallery_type;
		let data = this.service.list(headerParams).subscribe(
			(resp) => {
				this.isLoadingResults = false;
				this.images = resp;

				this.cdr.markForCheck();
				this.initForm();
			}, error => {
				this.isLoadingResults = false;
				this.cdr.markForCheck();
			});
	}


	// set image to form data
	onFileSelect(event) {
		if (event.target.files.length > 0) {
			const file = event.target.files[0];
			this.uploadForm.controls['image'].setValue(file);

			let reader = new FileReader();
			reader.readAsDataURL(file);
			reader.onload = (_event) => {
				this.imgURL = reader.result;
				this.cdr.markForCheck();
			}

		}
	}

	/**
	 * Initiate the form
	 *
	 */
	private initForm() {
		this.uploadForm = this.fb.group({
			image: ['', Validators.required] ,
		});
	}

	isControlHasError(controlName: string, validationType: string): boolean {
		return this.formErrorService.isControlHasError(this.uploadForm,controlName,validationType);
	}

	toggleSelectImage(image){
		if (this.multiple_images){
			let checkExist = this.selectedImages.find(singleImage => singleImage.id == image.id);
			if (checkExist){
				this.selectedImages = this.selectedImages.filter(singleImage => singleImage.id != image.id);
			}
			else{
				this.selectedImages.push(image);
			}
		}
		else{
			this.selectedImages = [];
			this.selectedImages.push(image);
		}
	}

	cancelSelectImage(image){
		this.selectedImages = this.selectedImages.filter(singleImage => singleImage.id != image.id);
	}

	checkSelected(id){
		return this.selectedImages.find(singleImage => singleImage.id == id);
	}


	submitForm () {
		const controls = this.uploadForm.controls;
		/** showing Errors  */
		if (this.uploadForm.invalid) {
			return this.formErrorService.markAsTouched(controls);
		}

		let galleryData = this.service.prepareObject(controls['image'].value, this.gallery_type);

		// call service to store Banner
		this.isLoadingResults = true;
		this.service.createFormData(galleryData).subscribe(resp => {
			this.imgURL = null;
			this.isLoadingResults = false;
			this.authNoticeService.setNotice(null);
			this.get(this.headerParams);
			this.cdr.markForCheck();
		} , handler => {
			this.authNoticeService.setNotice(this.helper.showingErrors(handler.error), 'danger');
			this.isLoadingResults = false;
		});
	}

	deleteModal(item) {
		const dialogRef = this.dialog.open(DeleteModalComponent, {
			width: '40rem',
			data: {
				title: this.translateService.instant('Components.Gallery.delete_image'),
				body: this.translateService.instant('Components.Gallery.delete_image_body'),
				name: this.translateService.instant('Components.Gallery.single'),
			}
		});
		dialogRef.afterClosed().subscribe(result => {
			if (result) {
				this.service.delete(item.id).subscribe(res => {
					//this.authNoticeService.setNotice('Image deleted successfully', 'success');
					this.get(this.headerParams);
				}, handler => {
					this.authNoticeService.setNotice(this.helper.showingErrors(handler.error), 'danger');
				});
			}
		})
	}


	saveSelectedImages(){

		let selectedImages_ids :[] = [];

		this.selectedImages.forEach((value, index) => {
			// @ts-ignore
			selectedImages_ids.push(value.id);
		});

		this.galleryInterface.attach(selectedImages_ids, this.selectedImages);
	}

	drop(event: CdkDragDrop<string[]>) {
		moveItemInArray(this.selectedImages, event.previousIndex, event.currentIndex);
	}

}
