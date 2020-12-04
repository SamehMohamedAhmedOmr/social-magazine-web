import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormErrorService} from '../../../../core/services/FormError.service';
import {TranslateService} from '@ngx-translate/core';
import {ArticleSubmitObserveService} from '../../../../core/services/observable/article/Article.submit.observe.service';
import {ArticleSubmitPhases} from '../../../../core/global/article.submit.phases';
import {ArticleModel} from '../../../../core/models/article-module/article.model';
import {ArticleObserveService} from '../../../../core/services/observable/article/Article.observe.service';
import {ManageArticleService} from '../../../../core/services/Article-Module/manage.article.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-article-data-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Input() article_id:number = null;
  @Input() article:ArticleModel = null;

  keywords_en:string[] =[];
  keywords_ar:string[] =[];

  form: FormGroup;

  constructor(private fb: FormBuilder ,
              private service: ManageArticleService,
              private formErrorService: FormErrorService,
              public articleSubmitObserveService: ArticleSubmitObserveService,
              public articleObserveService: ArticleObserveService,
              private ngxService: NgxUiLoaderService,
              private toastr: ToastrService,
              private cdr: ChangeDetectorRef,
              public translateService : TranslateService) {
  }

  ngOnInit() {
    this.initForm();
  }



  /**
   * Initiate the form
   *
   */
  private initForm() {

    this.keywords_en = (this.article?.keywords_en) ? this.article?.keywords_en: [];
    this.keywords_ar = (this.article?.keywords_ar) ? this.article?.keywords_ar: [];

    let keywords_ar = (this.article?.keywords_ar) ? ' ' : '';
    let keywords_en = (this.article?.keywords_en) ? ' ' : '';

    this.form = this.fb.group({
      content_ar:[this.article?.content_ar, Validators.required] ,
      content_en:[this.article?.content_en, Validators.required] ,
      keywords_en:[keywords_en, Validators.required] ,
      keywords_ar:[keywords_ar, Validators.required] ,
    });
  }

  next(){
    this.articleSubmitObserveService.submitOObserve(ArticleSubmitPhases.AUTHORS());

  }

  back(){
    this.articleSubmitObserveService.submitOObserve(ArticleSubmitPhases.INITIAL());
  }

  clearForm() {
    this.form.reset();
  }

  submitForm () {
    const controls = this.form.controls;
    /** showing Errors  */
    if (this.form.invalid) {
      return this.formErrorService.markAsTouched(controls);
    }
    this.update(controls)
  }

  update(controls){
    this.ngxService.start();

    const model = this.article;
    model.content_ar = controls['content_ar'].value;
    model.content_en = controls['content_en'].value;

    this.service.updateInfo(model).subscribe(resp => {

      this.ngxService.stop();
      this.articleObserveService.articleOObserve(resp);

      this.next();

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
