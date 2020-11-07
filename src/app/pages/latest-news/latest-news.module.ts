import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LatestNewsComponent } from './latest-news.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LatestNewsComponent
  }
];

@NgModule({
  declarations: [LatestNewsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class LatestNewsModule { }
