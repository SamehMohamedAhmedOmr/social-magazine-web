import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UrlName} from 'src/app/core/global/url.name';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {AuthNoticeService} from '../../../core/services/auth-notice.service';
import {MagazineNewsModel} from '../../../core/models/section-module/magazine.news.model';
import {MagazineNewsService} from '../../../core/services/Section-Module/magazine.news.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  news: MagazineNewsModel[] = [];
  isLoadingResults:boolean = true;

  constructor(private route: ActivatedRoute,
              private service: MagazineNewsService,
              private ngxService: NgxUiLoaderService,
              private authNoticeService: AuthNoticeService,
              private router: Router,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.get();
  }

  private get() {
    this.isLoadingResults = true;
    this.service.list(null).subscribe(
      (data) => {
        this.news = data;
        this.isLoadingResults = false;
        this.cdr.markForCheck();
      }, error => {
        this.router.navigate(['/'],).then();
      }
    );
  }

  detailsUrl(slug) {
    return '/' + UrlName.news() + '/' + slug;
  }

}
