import {Component, OnInit} from '@angular/core';
import {HomeModel} from '../../core/models/section-module/home.model';
import {HomeService} from '../../core/services/Section-Module/Home.service';
import {TestimonialModel} from '../../core/models/section-module/testimonial.model';
import {MagazineNewsModel} from '../../core/models/section-module/magazine.news.model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  testimonials:TestimonialModel[] = [];
  latest_news:MagazineNewsModel[] = [];

  homeModel:HomeModel;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.content.subscribe(model => {
      if (model){
        this.homeModel = model;
        this.testimonials = this.homeModel.testimonial;
        this.latest_news = this.homeModel.latest_news;
      }
    });
  }

}
