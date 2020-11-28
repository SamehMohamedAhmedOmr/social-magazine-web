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
import {TranslateModule} from '@ngx-translate/core';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {RouterModule} from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import {MatRadioModule} from '@angular/material/radio';
import {MatInputModule} from '@angular/material/input';
import {ImageSliderComponent} from './image-slider/image-slider.component';
import {PopupImageGalleryComponent} from './popup-image-gallery/popup-image-gallery.component';
import { BasicComponent } from './article/forms/basic/basic.component';
import { InfoComponent } from './article/forms/info/info.component';
import { AuthorComponent } from './article/forms/author/author.component';
import { SuggestedJudgeComponent } from './article/forms/suggested-judge/suggested-judge.component';
import { AttachmentsComponent } from './article/forms/attachments/attachments.component';
import { ConfirmComponent } from './article/forms/confirm/confirm.component';
import {MatChipsModule} from '@angular/material/chips';

@NgModule({
  declarations: [
    LatestNewsComponent,
    ApiLoaderComponent, AuthNoticeComponent, FilterComponent,
    FormErrorComponent, GalleryComponent, GlobalNoticeComponent,
    ListOptionsComponent, NextPreviousListComponent,
    NoRecordFoundComponent, PopupGalleryComponent,
    SoonComponent, UserFormComponent, DeleteModalComponent,
    ImageSliderComponent, PopupImageGalleryComponent,
    BasicComponent, InfoComponent, AuthorComponent,
    SuggestedJudgeComponent, AttachmentsComponent, ConfirmComponent
  ],
  entryComponents: [
    DeleteModalComponent,
    PopupGalleryComponent,
    PopupImageGalleryComponent,
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
    LatestNewsComponent,
    TranslateModule,
    ImageSliderComponent,
    BasicComponent,
    AttachmentsComponent,
    AuthorComponent,
    ConfirmComponent,
    InfoComponent,
    SuggestedJudgeComponent
  ],
  imports: [
    CommonModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatSelectModule,
    TranslateModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
    RouterModule,
    FormsModule,
    MatDividerModule,
    MatIconModule,
    MatRadioModule,
    MatInputModule,
    MatChipsModule,
  ]
})

export class SharedModule {
}

