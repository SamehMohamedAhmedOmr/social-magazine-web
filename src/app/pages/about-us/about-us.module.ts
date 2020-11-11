import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutUsComponent} from './about-us.component';
import {RouterModule, Routes} from '@angular/router';
import {PagesModule} from '../pages.module';
import { WhoIsUsComponent } from './who-is-us/who-is-us.component';
import { MagazineGoalsComponent } from './magazine-goals/magazine-goals.component';
import {MatDividerModule} from '@angular/material/divider';
import { MissionAndVisionComponent } from './mission-and-vision/mission-and-vision.component';


const routes: Routes = [
  {
    path: '',
    component: AboutUsComponent
  }
];


@NgModule({
  declarations: [AboutUsComponent, WhoIsUsComponent, MagazineGoalsComponent, MissionAndVisionComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        PagesModule,
        MatDividerModule,
    ]
})
export class AboutUsModule {
}
