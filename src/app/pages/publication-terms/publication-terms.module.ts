import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationTermsComponent } from './publication-terms.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PublicationTermsComponent
  }
];

@NgModule({
  declarations: [PublicationTermsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PublicationTermsModule { }
