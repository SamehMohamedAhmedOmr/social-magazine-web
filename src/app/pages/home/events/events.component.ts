import { Component, Input, OnInit } from '@angular/core';
import { EventsModel } from 'src/app/core/models/section-module/events.model';
import {HomeModel} from '../../../core/models/section-module/home.model';
import {VideosModel} from '../../../core/models/section-module/videos.model';
import {HomeService} from '../../../core/services/Section-Module/Home.service';
import {UrlName} from '../../../core/global/url.name';

@Component({
  selector: 'app-home-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  homeModel:HomeModel;

  events:EventsModel[] = [];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.content.subscribe(model => {
      if (model){
        this.homeModel = model;
        this.events = this.homeModel.latest_activities
      }
    });
  }

  detailsUrl(slug) {
    return '/' + UrlName.activities() + '/' + slug;
  }
}
