import { Component, Input, OnInit } from '@angular/core';
import {HomeModel} from '../../core/models/section-module/home.model';
import {HomeService} from '../../core/services/Section-Module/Home.service';
import {MagazineNewsModel} from '../../core/models/section-module/magazine.news.model';
import {UrlName} from '../../core/global/url.name';

@Component({
  selector: 'app-most-viewed',
  templateUrl: './most-viewed.component.html',
  styleUrls: ['./most-viewed.component.scss']
})
export class MostViewedComponent implements OnInit {

  @Input() padding:string = null;
  @Input() position:string = null;

  homeModel:HomeModel;

  most_viewed_news:MagazineNewsModel[] = [];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.content.subscribe(model => {
      if (model){
        this.homeModel = model;
        this.most_viewed_news = this.homeModel.most_viewed_news
      }
    });
  }

  detailsUrl(slug){
    return  '/' + UrlName.news() + '/' + slug;
  }

}
