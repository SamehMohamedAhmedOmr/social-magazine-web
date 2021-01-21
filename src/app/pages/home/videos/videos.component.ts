import { Component, OnInit } from '@angular/core';
import {HomeModel} from '../../../core/models/section-module/home.model';
import {HomeService} from '../../../core/services/Section-Module/Home.service';
import {VideosModel} from '../../../core/models/section-module/videos.model';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {

  homeModel:HomeModel;

  videos:VideosModel[] = [];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.content.subscribe(model => {
      if (model){
        this.homeModel = model;
        this.videos = this.homeModel.latest_videos;
      }
    });
  }

}
