import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitArticleComponent } from './submit-article.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SubmitArticleComponent
  }
];

@NgModule({
  declarations: [SubmitArticleComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class SubmitArticleModule { }
