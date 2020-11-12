import { Component, OnInit } from '@angular/core';
import {MagazineNewsModel} from '../../core/models/section-module/magazine.news.model';
import {HomeModel} from '../../core/models/section-module/home.model';
import {HomeService} from '../../core/services/Section-Module/Home.service';
import {MagazineInformationModel} from '../../core/models/section-module/magazine.information.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  magazine_information:MagazineInformationModel = null;

  homeModel:HomeModel;

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.content.subscribe(model => {
      if (model){
        this.homeModel = model;
        this.magazine_information = this.homeModel.magazine_information;
      }
    });
  }

}
