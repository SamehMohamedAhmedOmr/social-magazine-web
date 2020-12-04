import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyArticleComponent} from './my-article.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {PagesModule} from '../pages.module';
import { ListComponent } from './list/list.component';


const routes: Routes = [
  {
    path: '',
    component: MyArticleComponent
  }
];


@NgModule({
  declarations: [MyArticleComponent, ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    PagesModule,
  ]
})
export class MyArticleModule {
}
