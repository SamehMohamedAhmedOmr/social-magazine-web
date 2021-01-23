import {ChangeDetectorRef, Component, ElementRef, Input, OnInit} from '@angular/core';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {LatestMagazineNewsService} from '../../core/services/Section-Module/latest.magazine.news.service';
import {MagazineNewsModel} from '../../core/models/section-module/magazine.news.model';
import {UrlName} from '../../core/global/url.name';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit {

  @Input() latest_news: MagazineNewsModel[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

  displayContent(text) {
    return (text.length > 150) ? text.substring(0, 150) + ' ......' : text;
  }

  displayMore(text){
    return (text.length > 150);
  }

  detailsUrl(slug){
    return  '/' + UrlName.news() + '/' + slug;
  }

  calcLength(text:string) {
    return (text.length > 98) ? text.substring(0, 98) + ' ......' : text;
}

}
