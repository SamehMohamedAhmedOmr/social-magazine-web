import {Component, OnInit} from '@angular/core';

import {HomeService} from '../../core/services/Section-Module/Home.service';
import {WhoIsUsModel} from '../../core/models/section-module/who.is.us.model';
import {DependenciesModel} from '../../core/models/section-module/dependencies.model';
import {MagazineInformationModel} from '../../core/models/section-module/magazine.information.model';
import {HomeModel} from '../../core/models/section-module/home.model';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  who_is_us:WhoIsUsModel[] = [];
  dependenciesModel:DependenciesModel;

  homeModel:HomeModel;
  magazine_information:MagazineInformationModel;

  constructor(private homeService: HomeService) {
  }


  ngOnInit(): void {
    this.subscribeHomeAPI();
  }


  subscribeHomeAPI() {
    this.homeService.dependencies_content.subscribe(model => {
      if (model){
        this.dependenciesModel = model;
        this.who_is_us = this.dependenciesModel.who_is_us;
      }
    });

    this.homeService.content.subscribe(model => {
      if (model){
        this.homeModel = model;
        this.magazine_information = this.homeModel.magazine_information;
      }
    });
  }

}
