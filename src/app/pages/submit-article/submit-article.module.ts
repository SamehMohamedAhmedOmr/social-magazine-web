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
import {MatButtonModule} from '@angular/material/button';
import { ArticleFormComponent } from './article-form/article-form.component';
import { CompleteProfileDataComponent } from './complete-profile-data/complete-profile-data.component';
import { LoginRequiredComponent } from './login-required/login-required.component';

const routes: Routes = [
  {
    path: '',
    component: SubmitArticleComponent,
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
    ConfirmComponent,
    ArticleFormComponent,
    CompleteProfileDataComponent,
    LoginRequiredComponent
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
