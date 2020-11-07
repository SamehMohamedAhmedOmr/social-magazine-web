import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubmitArticleComponent } from './submit-article.component';
import { RouterModule, Routes } from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

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
        SharedModule,
    ]
})
export class SubmitArticleModule { }
