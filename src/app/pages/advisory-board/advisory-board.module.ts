import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvisoryBoardComponent } from './advisory-board.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdvisoryBoardComponent
  }
];

@NgModule({
  declarations: [AdvisoryBoardComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class AdvisoryBoardModule { }
