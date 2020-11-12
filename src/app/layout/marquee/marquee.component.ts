import {Component, OnInit} from '@angular/core';
import {TestimonialModel} from '../../core/models/section-module/testimonial.model';
import {MagazineNewsModel} from '../../core/models/section-module/magazine.news.model';
import {HomeModel} from '../../core/models/section-module/home.model';
import {HomeService} from '../../core/services/Section-Module/Home.service';

@Component({
  selector: 'app-marquee',
  templateUrl: './marquee.component.html',
  styleUrls: ['./marquee.component.scss']
})
export class MarqueeComponent implements OnInit {

  latest_news:MagazineNewsModel[] = [];

  homeModel:HomeModel;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.content.subscribe(model => {
      if (model){
        this.homeModel = model;
        this.latest_news = this.homeModel.latest_news;
      }
    });
  }

  defineArray() {
    return new Array(5);
  }

}
