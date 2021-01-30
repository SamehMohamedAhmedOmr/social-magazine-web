import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ArticleObserveService} from '../../../../core/services/observable/article/Article.observe.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {ToastrService} from 'ngx-toastr';
import {MatDialog} from '@angular/material/dialog';
import {TranslateService} from '@ngx-translate/core';
import {ManageArticleService} from '../../../../core/services/Article-Module/manage.article.service';
import {ArticleAttachmentsService} from '../../../../core/services/Article-Module/article-attachments.service';
import {ArticleModel} from '../../../../core/models/article-module/article.model';
import {DeleteModalComponent} from '../../../delete-modal/delete-modal.component';
import {Base64DownloadHelperService} from '../../../../core/services/Helpers/base64.download.helper.service';
import {$f} from 'codelyzer/angular/styles/chars';


@Component({
  selector: 'app-attachments-list',
  templateUrl: './attachments-list.component.html',
  styleUrls: ['./attachments-list.component.scss']
})
export class AttachmentsListComponent implements OnInit,OnChanges {

  @Input() article: ArticleModel = null;
  @Input() show_options:boolean = false;

  displayedColumns: string[] = [];
  dataSource = [];

  content_name:string = null;

  constructor(private service: ArticleAttachmentsService,
              public articleObserveService: ArticleObserveService,
              private ngxService: NgxUiLoaderService,
              private toastr: ToastrService,
              public dialog: MatDialog,
              public translateService : TranslateService,
              private articleService: ManageArticleService) {
  }

  ngOnInit(): void {
    this.initialize();
  }

  initialize(){
    this.dataSource = (this.article?.attachments) ? this.article?.attachments : [];
    this.content_name = this.translateService.instant('submit_article.form.attachment');
    this.initializeDisplayColumns();
  }

  initializeDisplayColumns(){
    if (this.show_options){
      this.displayedColumns = ['attachment_type', 'title', 'file', 'options'];
    }
    else{
      this.displayedColumns = ['attachment_type', 'title', 'file'];
    }
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
      this.toastr.success(this.translateService.instant('submit_article.msg.delete_attachments_success'),
        this.translateService.instant('submit_article.toast_title.delete_attachment'));
    }, handler => {
      let error = handler.error.message;
      this.toastr.error(error);
      this.ngxService.stop();
    });
  }


}
