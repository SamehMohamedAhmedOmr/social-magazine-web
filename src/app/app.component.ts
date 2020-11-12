import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {LangService} from './core/services/lang.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {HomeService} from './core/services/Section-Module/Home.service';
import {HomeModel} from './core/models/section-module/home.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = '';
  homeModel: HomeModel;
  constructor(private langService: LangService,
              private homeService:HomeService,
              private ngxService: NgxUiLoaderService,
              private cdr:ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.langService.loadStyle();
    this.getHomeAPI();
  }

  getHomeAPI(){
    this.ngxService.start();
    this.homeService.get().subscribe(value => {
      this.homeModel  = value;
      this.homeService.homeContent(this.homeModel);
      this.cdr.markForCheck();
      this.ngxService.stop();
    });
  }

}
