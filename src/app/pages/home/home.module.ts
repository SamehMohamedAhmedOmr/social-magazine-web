import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgMarqueeModule } from 'ng-marquee';
import { SliderComponent } from './slider/slider.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {SharedModule} from '../../shared/shared.module';
import {TranslateModule} from '@ngx-translate/core';
import { EventsComponent } from './events/events.component';

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
    TestimonialComponent,
    EventsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    NgMarqueeModule,
    CarouselModule,
    TranslateModule,
    SharedModule,
  ]
})
export class HomeModule { }
