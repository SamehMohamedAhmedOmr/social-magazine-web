import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration.component';
import { RouterModule, Routes } from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import { FormComponent } from './form/form.component';
import {PagesModule} from '../../pages.module';
import {MatInputModule} from '@angular/material/input';

const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent
  }
];

@NgModule({
  declarations: [RegistrationComponent, FormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    PagesModule,
    MatInputModule,
  ]
})
export class RegistrationModule { }
