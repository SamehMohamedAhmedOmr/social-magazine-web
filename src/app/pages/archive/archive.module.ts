import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArchiveComponent } from './archive.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ArchiveComponent
  }
];

@NgModule({
  declarations: [ArchiveComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class ArchiveModule { }
