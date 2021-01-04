import { Component, OnInit } from '@angular/core';
import {MagazineGoalsModel} from '../../core/models/section-module/magazine.goals.model';
import {MagazineInformationModel} from '../../core/models/section-module/magazine.information.model';
import {HomeModel} from '../../core/models/section-module/home.model';
import {HomeService} from '../../core/services/Section-Module/Home.service';

@Component({
  selector: 'app-magazine-goals',
  templateUrl: './magazine-goals.component.html',
  styleUrls: ['./magazine-goals.component.scss']
})
export class MagazineGoalsComponent implements OnInit {

  goals:MagazineGoalsModel[] = [];
  magazine_information:MagazineInformationModel = null;
  homeModel:HomeModel;

  constructor(private homeService: HomeService) {
  }


  ngOnInit(): void {
    this.subscribeHomeAPI();
  }


  subscribeHomeAPI() {
    this.homeService.content.subscribe(model => {
      if (model) {
        this.homeModel = model;
        this.magazine_information = this.homeModel.magazine_information;
        this.goals = this.homeModel.magazine_goals;
      }
    });
  }

}
