import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ArticleModel} from '../../../../core/models/article-module/article.model';
import {ArticleAuthorsService} from '../../../../core/services/Article-Module/article-authors.service';
import {ArticleObserveService} from '../../../../core/services/observable/article/Article.observe.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {ToastrService} from 'ngx-toastr';
import {ManageArticleService} from '../../../../core/services/Article-Module/manage.article.service';
import {ArticleSuggestedJudgesService} from '../../../../core/services/Article-Module/article-suggested-judges.service';
import {TranslateService} from '@ngx-translate/core';
import {MatDialog} from '@angular/material/dialog';
import {DeleteModalComponent} from '../../../delete-modal/delete-modal.component';


@Component({
  selector: 'app-judges-list',
  templateUrl: './judges-list.component.html',
  styleUrls: ['./judges-list.component.scss']
})
export class JudgesListComponent implements OnInit, OnChanges {

  @Input() article: ArticleModel = null;
  @Input() show_options:boolean = false;

  displayedColumns: string[] = [];
  dataSource = [];
  content_name:string = null;

  constructor(private service: ArticleSuggestedJudgesService,
              public articleObserveService: ArticleObserveService,
              private ngxService: NgxUiLoaderService,
              private toastr: ToastrService,
              public dialog: MatDialog,
              public translateService : TranslateService,
              private articleService: ManageArticleService) {
  }

  ngOnInit(): void {
    this.initialize();
    this.content_name = this.translateService.instant('submit_article.form.judge');
    this.initializeDisplayColumns();
  }

  initializeDisplayColumns(){
    if (this.show_options){
      this.displayedColumns = ['first_name', 'family_name', 'email', 'options'];
    }
    else{
      this.displayedColumns = ['first_name', 'family_name', 'email'];
    }
  }

  initialize(){
    this.dataSource = (this.article?.suggested_judges) ? this.article?.suggested_judges : [];
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.initialize()
  }

  deleteModal(item) {
    const dialogRef = this.dialog.open(DeleteModalComponent, {
      width: '40rem',
      data: {
        title: this.translateService.instant('COMMON.Delete_Title',
          {name : this.content_name}),
        body: this.translateService.instant('COMMON.Delete_Body',
          {name : this.content_name}),
        name: this.content_name,
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.delete(item.id);
      }
    });
  }

  delete(id: number) {
    this.ngxService.start();

    this.service.delete(id, this.article.id).subscribe(resp => {
      this.get();
    }, handler => {
      let error = handler.error.message;
      this.toastr.error(error);
      this.ngxService.stop();
    });
  }

  get() {
    this.articleService.get(this.article.id).subscribe(resp => {
      this.articleObserveService.articleOObserve(resp);
      this.ngxService.stop();
      this.toastr.success(this.translateService.instant('submit_article.msg.delete_suggested_judge_success'),
        this.translateService.instant('submit_article.toast_title.delete_suggested_judge'));
    }, handler => {
      let error = handler.error.message;
      this.toastr.error(error);
      this.ngxService.stop();
    });
  }

}
