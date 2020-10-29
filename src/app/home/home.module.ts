import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgMarqueeModule } from 'ng-marquee';
import { MarqueeComponent } from './marquee/marquee.component';
import { SliderComponent } from './slider/slider.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent, MarqueeComponent, SliderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgMarqueeModule,
  ]
})
export class HomeModule { }
