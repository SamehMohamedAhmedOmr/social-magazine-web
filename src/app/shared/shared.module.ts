import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LatestNewsComponent} from './latest-news/latest-news.component';
import {ApiLoaderComponent} from './api-loader/api-loader.component';
import {AuthNoticeComponent} from './auth-notice/auth-notice.component';
import {FilterComponent} from './filter/filter.component';
import {FormErrorComponent} from './form-error/form-error.component';
import {GalleryComponent} from './gallery/gallery.component';
import {GlobalNoticeComponent} from './global-notice/global-notice.component';
import {ListOptionsComponent} from './list-options/list-options.component';
import {NextPreviousListComponent} from './next-previous-list/next-previous-list.component';
import {NoRecordFoundComponent} from './no-record-found/no-record-found.component';
import {PopupGalleryComponent} from './popup-gallery/popup-gallery.component';
import {SoonComponent} from './soon/soon.component';
import {UserFormComponent} from './users/user-form/user-form.component';
import {DeleteModalComponent} from './delete-modal/delete-modal.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    LatestNewsComponent,
    ApiLoaderComponent, AuthNoticeComponent, FilterComponent,
    FormErrorComponent, GalleryComponent, GlobalNoticeComponent,
    ListOptionsComponent, NextPreviousListComponent,
    NoRecordFoundComponent, PopupGalleryComponent,
    SoonComponent, UserFormComponent, DeleteModalComponent
  ],
  entryComponents: [
    DeleteModalComponent,
    PopupGalleryComponent,
  ],
  exports: [
    FilterComponent,
    ApiLoaderComponent,
    DeleteModalComponent,
    GalleryComponent,
    AuthNoticeComponent,
    GlobalNoticeComponent,
    NextPreviousListComponent,
    SoonComponent,
    NoRecordFoundComponent,
    FormErrorComponent,
    ListOptionsComponent,
    UserFormComponent,
    TranslateModule,
    LatestNewsComponent
  ],
  imports: [
    CommonModule
  ]
})

export class SharedModule {
}

