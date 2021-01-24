import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UrlName} from 'src/app/core/global/url.name';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {AuthNoticeService} from '../../../core/services/auth-notice.service';
import {MagazineNewsModel} from '../../../core/models/section-module/magazine.news.model';
import {MagazineNewsService} from '../../../core/services/Section-Module/magazine.news.service';
import {PaginateParams} from '../../../core/models/paginateParams.interface';
import {GlobalConfig} from '../../../core/global/global.config';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  news: MagazineNewsModel[] = [];
  isLoadingResults: boolean = true;

  headerParams: PaginateParams = {
    active: 1,
    per_page: GlobalConfig.pagination_per_page,
    search_key: null,
    sort_key: null,
    sort_order: 'desc',
    next_page_index: 0,
  };

  // pagination variables
  resultsLength = 0;
  pageIndex = 0;

  constructor(private route: ActivatedRoute,
              private service: MagazineNewsService,
              private ngxService: NgxUiLoaderService,
              private authNoticeService: AuthNoticeService,
              private router: Router,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.get(this.headerParams);
  }

  private get(headerParams) {
    this.isLoadingResults = true;
    this.headerParams = headerParams;
    this.service.list(headerParams).subscribe(
      (resp) => {
        this.news = resp;
        this.isLoadingResults = false;
        this.resultsLength = (resp['pagination'] ? resp['pagination'].total : 0);
        this.cdr.markForCheck();
      }, error => {
        this.router.navigate(['/'],).then();
      }
    );
  }

  // pagination data tables
  public pagination(pageIndex) {
    this.pageIndex = pageIndex;
    this.headerParams.next_page_index = this.pageIndex - 1;
    this.get(this.headerParams);
  }

  detailsUrl(slug) {
    return '/' + UrlName.news() + '/' + slug;
  }

}
