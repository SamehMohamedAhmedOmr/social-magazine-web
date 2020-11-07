import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgMarqueeModule } from 'ng-marquee';
import { SliderComponent } from './slider/slider.component';
import { MostViewedComponent } from './most-viewed/most-viewed.component';
import { MostDownloadedComponent } from './most-downloaded/most-downloaded.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {SharedModule} from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    MostViewedComponent,
    MostDownloadedComponent,
    TestimonialComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgMarqueeModule,
    CarouselModule,
    SharedModule
  ]
})
export class HomeModule { }
