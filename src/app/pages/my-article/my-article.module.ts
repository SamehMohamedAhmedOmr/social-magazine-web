import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MyArticleComponent} from './my-article.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {PagesModule} from '../pages.module';
import { ListComponent } from './list/list.component';
import { ShowComponent } from './show/show.component';


const routes: Routes = [
  {
    path: '',
    component: MyArticleComponent
  },
  {
    path: ':id',
    component: ShowComponent
  },
];


@NgModule({
  declarations: [MyArticleComponent, ListComponent, ShowComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    PagesModule,
  ]
})
export class MyArticleModule {
}
