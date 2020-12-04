import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {ManageArticleService} from '../../../core/services/Article-Module/manage.article.service';
import {GlobalConfig} from '../../../core/global/global.config';
import {PaginateParams} from '../../../core/models/paginateParams.interface';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {ToastrService} from 'ngx-toastr';
import {TranslateService} from '@ngx-translate/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {ArticleIdObserveService} from '../../../core/services/observable/article/Article.Id.observe.service';
import {ArticleObserveService} from '../../../core/services/observable/article/Article.observe.service';
import {Router} from '@angular/router';
import {UrlName} from '../../../core/global/url.name';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  displayedColumns: string[] = ['series', 'title_ar', 'status', 'options'];
  dataSource;
  articles = [];

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  headerParams: PaginateParams = {
    active: null,
    per_page: GlobalConfig.pagination_per_page,
    search_key: null,
    sort_key: 'id',
    sort_order: 'desc',
    next_page_index: 0,
  };

  // pagination variables
  resultsLength = 0;
  pageIndex = 0;

  //filter variables

  constructor(private service: ManageArticleService,
              private ngxService: NgxUiLoaderService,
              private toaster: ToastrService,
              private cdr: ChangeDetectorRef,
              private router: Router,
              public articleIdObserveService: ArticleIdObserveService,
              public articleObserveService: ArticleObserveService,
              public translateService: TranslateService) {
  }

  ngOnInit(): void {
    this.get(this.headerParams);
  }

  // call api to get Banner Data from the server
  get(headerParams) {
    this.headerParams = headerParams;

    this.ngxService.start();

    this.service.list(headerParams).subscribe(
      (resp) => {
        this.dataSource = new MatTableDataSource(resp);
        this.articles = resp;
        this.dataSource.sort = this.sort;
        this.resultsLength = (resp['pagination'] ? resp['pagination'].total : 0);
        this.cdr.markForCheck();
        this.ngxService.stop();
      }, error => {
        this.dataSource = new MatTableDataSource([]);
        this.dataSource.sort = this.sort;
        this.cdr.markForCheck();
        this.ngxService.stop();
      });
  }


  // pagination data tables
  public pagination(event?: PageEvent) {
    this.pageIndex = event.pageIndex;
    this.headerParams.next_page_index = this.pageIndex;
    this.get(this.headerParams);
  }

  displayContent(text){
    return (text.length > 70) ? text.substring(0, 70) + ' ......' : text;
  }

  completeArticle(article) {
    this.articleIdObserveService.articleIdObserve(article.id);

    this.articleObserveService.articleOObserve(article.current_article);

    this.router.navigate(['/' + UrlName.submitArticle()],).then();
  }

}
