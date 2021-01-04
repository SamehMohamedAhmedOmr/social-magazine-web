import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {MagazineCategoryModel} from '../../core/models/section-module/magazine.category.model';
import {MagazineCategoriesService} from '../../core/services/Section-Module/magazine.categories.service';
import {MatDialog} from '@angular/material/dialog';
import {PopupImageGalleryComponent} from '../../shared/popup-image-gallery/popup-image-gallery.component';
import {TranslateService} from '@ngx-translate/core';
import {HomeModel} from '../../core/models/section-module/home.model';
import {HomeService} from '../../core/services/Section-Module/Home.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  categories:MagazineCategoryModel[] = [];

  homeModel:HomeModel;

  constructor(private magazineCategoriesService:MagazineCategoriesService,
              private ngxService: NgxUiLoaderService,
              private translateService:TranslateService,
              private homeService: HomeService,
              public dialog: MatDialog,
              private cdr:ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.subscribeHomeAPI();
  }

  subscribeHomeAPI() {
    this.homeService.content.subscribe(model => {
      if (model){
        this.homeModel = model;
        this.categories = this.homeModel.magazine_categories;
      }
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
