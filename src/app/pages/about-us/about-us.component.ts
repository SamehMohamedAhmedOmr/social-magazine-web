import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {WhoIsUsService} from '../../core/services/Section-Module/who.is.us.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {MagazineGoalsService} from '../../core/services/Section-Module/magazine.goals.service';
import {MagazineInformationModel} from '../../core/models/section-module/magazine.information.model';
import {HomeModel} from '../../core/models/section-module/home.model';
import {HomeService} from '../../core/services/Section-Module/Home.service';
import {WhoIsUsModel} from '../../core/models/section-module/who.is.us.model';
import {MagazineGoalsModel} from '../../core/models/section-module/magazine.goals.model';
import {ModelBase} from '../../core/models/Base/base.model';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  who_is_us:WhoIsUsModel[] = [];
  goals:MagazineGoalsModel[] = [];
  magazine_information:MagazineInformationModel = null;
  homeModel:HomeModel;

  constructor(private whoIsUsService:WhoIsUsService,
              private homeService: HomeService,
              private magazineGoalsService:MagazineGoalsService,
              private ngxService: NgxUiLoaderService,
              private cdr:ChangeDetectorRef) {
  }


  ngOnInit(): void {
    this.getWhoIsUs();
    this.subscribeHomeAPI();
  }

  getWhoIsUs(){
    this.ngxService.start();
    this.whoIsUsService.list(null).subscribe(value => {
      this.who_is_us  = value;
      this.cdr.markForCheck();
      this.getGoals();
    });
  }

  getGoals(){
    this.magazineGoalsService.list(null).subscribe(value => {
      this.goals  = value;
      this.cdr.markForCheck();
      this.ngxService.stop();
    });
  }

  subscribeHomeAPI() {
    this.homeService.content.subscribe(model => {
      if (model){
        this.homeModel = model;
        this.magazine_information = this.homeModel.magazine_information;
      }
    });
  }

}
