import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {FormErrorService} from '../../../../core/services/FormError.service';
import {ArticleSubmitPhases} from '../../../../core/global/article.submit.phases';
import {ArticleSubmitObserveService} from '../../../../core/services/observable/article/Article.submit.observe.service';
import {ManageArticleService} from '../../../../core/services/Article-Module/manage.article.service';
import {ArticleModel} from '../../../../core/models/article-module/article.model';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {ToastrService} from 'ngx-toastr';
import {ArticleIdObserveService} from '../../../../core/services/observable/article/Article.Id.observe.service';
import {ArticleObserveService} from '../../../../core/services/observable/article/Article.observe.service';

@Component({
  selector: 'app-article-basic-data',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  @Input() article_id:number = null;
  @Input() article:ArticleModel = null;

  form: FormGroup;

  constructor(private fb: FormBuilder ,
              private service: ManageArticleService,
              private formErrorService: FormErrorService,
              public articleSubmitObserveService: ArticleSubmitObserveService,
              private ngxService: NgxUiLoaderService,
              private toastr: ToastrService,
              public articleIdObserveService: ArticleIdObserveService,
              public articleObserveService: ArticleObserveService,
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
    this.form = this.fb.group({
      article_type_id:[this.article?.article_type?.id, Validators.required] ,
      title_ar:[this.article?.title_ar, Validators.required] ,
      title_en:[this.article?.title_en, Validators.required] ,
    });
  }


  clearForm() {
    this.form.reset();
  }

  next(){
    this.articleSubmitObserveService.submitOObserve(ArticleSubmitPhases.KEYWORDS());
  }

  submitForm () {
    const controls = this.form.controls;
    /** showing Errors  */
    if (this.form.invalid) {
      return this.formErrorService.markAsTouched(controls);
    }


    if (this.article_id){
      this.update(controls)
    }
    else {
      this.create(controls)
    }
  }



  create(controls){
    this.ngxService.start();

    const model = this.article;
    model.title_ar = controls['title_ar'].value;
    model.title_en = controls['title_en'].value;
    model.article_type.id = controls['article_type_id'].value;

    this.service.create(model).subscribe(resp => {

      this.articleIdObserveService.articleIdObserve(resp.id);
      this.get(resp.id);

    } , handler => {
      let error = handler.error.message;
      this.toastr.error(error);
      this.ngxService.stop();
    });
  }

  update(controls){
    this.ngxService.start();

    const model = this.article;
    model.title_ar = controls['title_ar'].value;
    model.title_en = controls['title_en'].value;

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

  get(id){
    this.service.get(id).subscribe(resp => {
      this.articleObserveService.articleOObserve(resp);
      this.ngxService.stop();
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
