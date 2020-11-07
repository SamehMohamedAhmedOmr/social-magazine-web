import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SharedComponent} from './shared.component';
import {RouterModule, Routes} from '@angular/router';
import {LatestNewsComponent} from './latest-news/latest-news.component';
import {ApiLoaderComponent} from './api-loader/api-loader.component';

const routes: Routes = [
  {
    path: '',
    component: SharedComponent
  }
];

@NgModule({
  declarations: [
    SharedComponent, LatestNewsComponent,
    ApiLoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class SharedModule {
}
