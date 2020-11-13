import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {MagazineCategoryModel} from '../../core/models/section-module/magazine.category.model';
import {MagazineCategoriesService} from '../../core/services/Section-Module/magazine.categories.service';
import {MatDialog} from '@angular/material/dialog';
import {PopupImageGalleryComponent} from '../../shared/popup-image-gallery/popup-image-gallery.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories:MagazineCategoryModel[] = [];

  constructor(private magazineCategoriesService:MagazineCategoriesService,
              private ngxService: NgxUiLoaderService,
              private translateService:TranslateService,
              public dialog: MatDialog,
              private cdr:ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getPublicationRules();
  }

  getPublicationRules(){
    this.ngxService.start();
    this.magazineCategoriesService.list(null).subscribe(value => {
      this.categories  = value;
      this.ngxService.stop();

      this.cdr.markForCheck();
    });
  }

  openGalleryDialog(images) {
    const dialogRef = this.dialog.open(PopupImageGalleryComponent, {
      width: '100vw',
      panelClass: 'full-screen-modal',
      data: {
        title: this.translateService.instant('COMMON.attachment'),
        images: images,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }

}
