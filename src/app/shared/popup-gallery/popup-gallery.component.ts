import {Component, Inject, OnInit} from '@angular/core';
import {GalleryInterface} from '../Base-Interface/gallery.Interface';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
	selector: 'kt-popup-gallery',
	templateUrl: './popup-gallery.component.html',
	styleUrls: ['./popup-gallery.component.scss']
})
export class PopupGalleryComponent implements OnInit {

	constructor(
		public dialogRef: MatDialogRef<PopupGalleryComponent>,
		@Inject(MAT_DIALOG_DATA)
		public data: {
			title:string,
			gallery_type:string,
			selectedImages:[],
			galleryInterface:GalleryInterface,
			multiple_images:boolean,
		}
	) {
	}

	ngOnInit() {

	}

	onNoClick() {
		this.dialogRef.close();
	}

}
