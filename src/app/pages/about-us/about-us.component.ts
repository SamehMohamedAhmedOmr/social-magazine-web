import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {WhoIsUsService} from '../../core/services/Section-Module/who.is.us.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {MagazineGoalsService} from '../../core/services/Section-Module/magazine.goals.service';
import {MagazineInformationModel} from '../../core/models/section-module/magazine.information.model';
import {MagazineInformationService} from '../../core/services/Section-Module/magazine.information.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  who_is_us:[] = [];
  goals:[] = [];
  magazineInformationModel:MagazineInformationModel;

  constructor(private whoIsUsService:WhoIsUsService,
              private magazineGoalsService:MagazineGoalsService,
              private magazineInformationService:MagazineInformationService,
              private ngxService: NgxUiLoaderService,
              private cdr:ChangeDetectorRef) {
  }


  ngOnInit(): void {
    this.getWhoIsUs();
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
      this.getMagazineInformation();
    });
  }

  getMagazineInformation(){
    this.magazineInformationService.get().subscribe(value => {
      this.magazineInformationModel  = value;
      this.ngxService.stop();
      this.cdr.markForCheck();
    });
  }

}
