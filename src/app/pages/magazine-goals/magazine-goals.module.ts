import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MagazineGoalsComponent} from './magazine-goals.component';
import {MissionAndVisionComponent} from './mission-and-vision/mission-and-vision.component';
import {MagazineGoalsListComponent} from './magazine-goals/magazine-goals-list.component';
import {RouterModule, Routes} from '@angular/router';
import {PagesModule} from '../pages.module';
import {MatDividerModule} from '@angular/material/divider';

const routes: Routes = [
  {
    path: '',
    component: MagazineGoalsComponent
  }
];

@NgModule({
  declarations: [MagazineGoalsComponent, MissionAndVisionComponent, MagazineGoalsListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PagesModule,
    MatDividerModule,
  ]
})
export class MagazineGoalsModule {
}
