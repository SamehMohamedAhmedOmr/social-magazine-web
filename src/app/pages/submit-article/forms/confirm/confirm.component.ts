import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormErrorService} from '../../../../core/services/FormError.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {AuthNoticeService} from '../../../../core/services/auth-notice.service';
import {HelperService} from '../../../../core/services/helper.service';
import {ArticleSubmitObserveService} from '../../../../core/services/observable/article/Article.submit.observe.service';
import {ArticleSubmitPhases} from '../../../../core/global/article.submit.phases';
import {ArticleModel} from '../../../../core/models/article-module/article.model';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {ToastrService} from 'ngx-toastr';
import {ManageArticleService} from '../../../../core/services/Article-Module/manage.article.service';
import {UrlName} from '../../../../core/global/url.name';

@Component({
  selector: 'app-article-confirm-form',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  @Input() article_id:number = null;
  @Input() article:ArticleModel = null;

  constructor(private fb: FormBuilder ,
              private service: ManageArticleService,
              public articleSubmitObserveService: ArticleSubmitObserveService,
              private formErrorService: FormErrorService,
              private ngxService: NgxUiLoaderService,
              private toastr: ToastrService,
              private route: ActivatedRoute,
              private router:Router,
              public translateService : TranslateService,
              private authNoticeService: AuthNoticeService,
              private helper: HelperService) {
  }

  ngOnInit() {
  }

  getMyArticle(){
    return '/' + UrlName.myArticle();
  }

  back(){
    this.articleSubmitObserveService.submitOObserve(ArticleSubmitPhases.ATTACHMENTS());
  }

  submitForm () {
    const model = new ArticleModel(null);

    this.ngxService.start();
    // call service to store Banner
    this.service.confirm(this.article.id , model).subscribe(resp => {
      this.ngxService.stop();
      this.toastr.success(this.translateService.instant('submit_article.msg.add_article_success'),
        this.translateService.instant('submit_article.toast_title.add_article'));
      this.router.navigate([this.getMyArticle()]).then();
    } , handler => {
      let error = handler.error.message;
      this.toastr.error(error);
      this.ngxService.stop();
    });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {

  }

}
