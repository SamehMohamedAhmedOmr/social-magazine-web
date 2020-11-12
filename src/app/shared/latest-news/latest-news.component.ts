import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {LatestMagazineNewsService} from '../../core/services/Section-Module/latest.magazine.news.service';
import {MagazineNewsModel} from '../../core/models/section-module/magazine.news.model';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {

  @Input() latest_news:MagazineNewsModel[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }



}
