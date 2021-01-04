import {ChangeDetectorRef, Component, OnInit} from '@angular/core';

import {HomeModel} from '../../core/models/section-module/home.model';
import {HomeService} from '../../core/services/Section-Module/Home.service';
import {WhoIsUsModel} from '../../core/models/section-module/who.is.us.model';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  who_is_us:WhoIsUsModel[] = [];
  homeModel:HomeModel;

  constructor(private homeService: HomeService) {
  }


  ngOnInit(): void {
    this.subscribeHomeAPI();
  }


  subscribeHomeAPI() {
    this.homeService.content.subscribe(model => {
      if (model){
        this.homeModel = model;
        this.who_is_us = this.homeModel.who_is_us;
      }
    });
  }

}
