import { Component, OnInit } from '@angular/core';
import {MagazineInformationModel} from '../../core/models/section-module/magazine.information.model';
import {HomeModel} from '../../core/models/section-module/home.model';
import {HomeService} from '../../core/services/Section-Module/Home.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

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
