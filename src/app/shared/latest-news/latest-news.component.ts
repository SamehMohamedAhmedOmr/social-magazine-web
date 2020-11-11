import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {LatestMagazineNewsService} from '../../core/services/Section-Module/latest.magazine.news.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {

  @Input() latest_news:[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }



}
