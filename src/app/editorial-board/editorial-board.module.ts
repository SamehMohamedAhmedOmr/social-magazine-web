import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditorialBoardComponent } from './editorial-board.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: EditorialBoardComponent
  }
];

@NgModule({
  declarations: [EditorialBoardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class EditorialBoardModule { }
