import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { RouterModule, Routes } from '@angular/router';
import {SharedModule} from '../../../shared/shared.module';
import { FormComponent } from './form/form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {PagesModule} from '../../pages.module';
import {MatInputModule} from '@angular/material/input';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [LoginComponent, FormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    ReactiveFormsModule,
    MatButtonModule,
    PagesModule,
    MatInputModule,
  ]
})
export class LoginModule { }
