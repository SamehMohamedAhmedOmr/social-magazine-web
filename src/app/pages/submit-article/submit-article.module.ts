import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubmitArticleComponent} from './submit-article.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {NavigationComponent} from './navigation/navigation.component';
import {BasicComponent} from './forms/basic/basic.component';
import {InfoComponent} from './forms/info/info.component';
import {SuggestedJudgesComponent} from './forms/suggested-judges/suggested-judges.component';
import {AuthorsComponent} from './forms/authors/authors.component';
import { AttachmentsComponent } from './forms/attachments/attachments.component';
import { ConfirmComponent } from './forms/confirm/confirm.component';
import {UrlName} from '../../core/global/url.name';
import {MatButtonModule} from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: SubmitArticleComponent,
    children: [
      {
        path: '',
        component: BasicComponent
      },
      {
        path: UrlName.ArticleContent(),
        component: InfoComponent
      },
      {
        path: UrlName.ArticleSuggestedJudges(),
        component: SuggestedJudgesComponent
      },
      {
        path: UrlName.ArticleAuthors(),
        component: AuthorsComponent
      },
      {
        path: UrlName.ArticleAttachments(),
        component: AttachmentsComponent
      },
      {
        path: UrlName.ArticleSubmitReview(),
        component: ConfirmComponent
      },
      {path: '**', redirectTo: '', pathMatch: ''},
    ]
  }
];

@NgModule({
  declarations: [
    SubmitArticleComponent,
    NavigationComponent,
    BasicComponent,
    InfoComponent,
    SuggestedJudgesComponent,
    AuthorsComponent,
    AttachmentsComponent,
    ConfirmComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatButtonModule,
  ]
})
export class SubmitArticleModule {
}
