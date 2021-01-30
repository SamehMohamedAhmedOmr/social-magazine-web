import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicationTermsComponent } from './publication-terms.component';
import { RouterModule, Routes } from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

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
    SharedModule,
  ]
})
export class PublicationTermsModule { }
