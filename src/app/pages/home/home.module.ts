import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgMarqueeModule } from 'ng-marquee';
import { MarqueeComponent } from './marquee/marquee.component';
import { SliderComponent } from './slider/slider.component';
import { LatestNewsComponent } from '../shared/latest-news/latest-news.component';
import { MostViewedComponent } from './most-viewed/most-viewed.component';
import { MostDownloadedComponent } from './most-downloaded/most-downloaded.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {LatestNewsModule} from '../latest-news/latest-news.module';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  declarations: [HomeComponent, MarqueeComponent, SliderComponent, LatestNewsComponent, MostViewedComponent, MostDownloadedComponent, TestimonialComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        NgMarqueeModule,
        CarouselModule,
        LatestNewsModule
    ]
})
export class HomeModule { }
