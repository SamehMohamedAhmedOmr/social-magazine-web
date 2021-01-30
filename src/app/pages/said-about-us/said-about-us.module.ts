import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaidAboutUsComponent } from './said-about-us.component';
import { RouterModule, Routes } from '@angular/router';
import {SharedModule} from '../../shared/shared.module';

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
        SharedModule,
    ]
})
export class SaidAboutUsModule { }
