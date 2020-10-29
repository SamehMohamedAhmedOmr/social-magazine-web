import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaidAboutUsComponent } from './said-about-us.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SaidAboutUsComponent
  }
];

@NgModule({
  declarations: [SaidAboutUsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class SaidAboutUsModule { }
