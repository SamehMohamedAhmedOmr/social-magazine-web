import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UrlName} from 'src/app/core/global/url.name';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {AuthNoticeService} from '../../../core/services/auth-notice.service';
import {EventsModel} from '../../../core/models/section-module/events.model';
import {EventsService} from '../../../core/services/Section-Module/events.service';
import {PaginateParams} from '../../../core/models/paginateParams.interface';
import {GlobalConfig} from '../../../core/global/global.config';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {

  events: EventsModel[] = [];
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
              private service: EventsService,
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
    this.service.list(null).subscribe(
      (resp) => {
        this.events = resp;
        this.isLoadingResults = false;
        this.resultsLength = (resp['pagination'] ? resp['pagination'].total : 0);
        this.cdr.markForCheck();
      }, error => {
        this.router.navigate(['/'],).then();
      }
    );
  }

  detailsUrl(slug) {
    return '/' + UrlName.events() + '/' + slug;
  }

  getContent(text){
    return (text.length > 400) ? text.substring(0, 400) + ' ......' : text;
  }

  checkContentLength(text){
    return (text.length > 400);
  }

  // pagination data tables
  public pagination(pageIndex) {
    this.pageIndex = pageIndex;
    this.headerParams.next_page_index = this.pageIndex - 1;
    this.get(this.headerParams);
  }

}
