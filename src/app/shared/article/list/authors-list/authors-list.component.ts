import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ArticleModel} from '../../../../core/models/article-module/article.model';
import {ArticleAuthorsService} from '../../../../core/services/Article-Module/article-authors.service';
import {ManageArticleService} from '../../../../core/services/Article-Module/manage.article.service';
import {ArticleObserveService} from '../../../../core/services/observable/article/Article.observe.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {ToastrService} from 'ngx-toastr';
import {TranslateService} from '@ngx-translate/core';
import {DeleteModalComponent} from '../../../delete-modal/delete-modal.component';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-authors-list',
  templateUrl: './authors-list.component.html',
  styleUrls: ['./authors-list.component.scss']
})
export class AuthorsListComponent implements OnInit, OnChanges {

  @Input() article: ArticleModel = null;
  @Input() show_options:boolean = false;

  displayedColumns: string[] = [];
  dataSource = [];

  content_name:string = null;

  constructor(private service: ArticleAuthorsService,
              public articleObserveService: ArticleObserveService,
              private ngxService: NgxUiLoaderService,
              public dialog: MatDialog,
              private toastr: ToastrService,
              public translateService : TranslateService,
              private articleService: ManageArticleService) {
  }

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.dataSource = (this.article?.authors) ? this.article?.authors : [];
    this.content_name = this.translateService.instant('submit_article.form.author');
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

  ngOnChanges(changes: SimpleChanges): void {
    this.initialize();
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
      this.toastr.success(this.translateService.instant('submit_article.msg.delete_author_success'),
        this.translateService.instant('submit_article.toast_title.delete_author'));
    }, handler => {
      let error = handler.error.message;
      this.toastr.error(error);
      this.ngxService.stop();
    });
  }

}
