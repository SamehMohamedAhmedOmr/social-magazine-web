import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ArticleComponent} from './article.component';
import {DetailsComponent} from './details/details.component';
import {ListComponent} from './list/list.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ArticleComponent,
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: ':slug',
        component: DetailsComponent
      },
      {path: '**', redirectTo: '', pathMatch: ''},
    ]
  }
];


@NgModule({
  declarations: [ArticleComponent, DetailsComponent, ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ArticleModule {
}
