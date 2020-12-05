import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormErrorService} from '../../../../core/services/FormError.service';
import {TranslateService} from '@ngx-translate/core';
import {ArticleSubmitObserveService} from '../../../../core/services/observable/article/Article.submit.observe.service';
import {ArticleSubmitPhases} from '../../../../core/global/article.submit.phases';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {ToastrService} from 'ngx-toastr';
import {ArticleModel} from '../../../../core/models/article-module/article.model';
import {ArticleAttachmentsModel} from '../../../../core/models/article-module/article.attachments.model';
import {ArticleAttachmentsService} from '../../../../core/services/Article-Module/article-attachments.service';
import {ManageArticleService} from '../../../../core/services/Article-Module/manage.article.service';
import {ArticleObserveService} from '../../../../core/services/observable/article/Article.observe.service';

@Component({
  selector: 'app-article-attachments-data',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.scss']
})
export class AttachmentsComponent implements OnInit, OnChanges {

  @Input() article_id:number = null;
  @Input() article:ArticleModel = null;

  form: FormGroup;

  disable_next:boolean = true;
  ORIGINAL_ARTICLE:boolean = false;
  SUMMARY_OF_RESEARCH:boolean = false;

  constructor(private fb: FormBuilder ,
              private service: ArticleAttachmentsService,
              private articleService: ManageArticleService,
              public articleSubmitObserveService: ArticleSubmitObserveService,
              public articleObserveService: ArticleObserveService,
              private formErrorService: FormErrorService,
              private ngxService: NgxUiLoaderService,
              private toastr: ToastrService,
              public translateService : TranslateService) {
  }

  ngOnInit() {
    this.initForm();
    this.checkAttachmentsLimits();
  }


  ngOnChanges(changes: SimpleChanges): void {
    this.checkAttachmentsLimits();
  }

  checkAttachmentsLimits(){

    this.ORIGINAL_ARTICLE = false;
    this.SUMMARY_OF_RESEARCH = false;

    this.article.attachments.forEach(value => {
      let key = value?.attachment_type?.key;
      if (key == 'ORIGINAL_ARTICLE'){
        this.ORIGINAL_ARTICLE = true;
      }
      if ( key == 'SUMMARY_OF_RESEARCH'){
        this.SUMMARY_OF_RESEARCH = true;
      }
    });

    if (this.ORIGINAL_ARTICLE && this.SUMMARY_OF_RESEARCH){
      this.disable_next = false;
    }

  }

  /**
   * Initiate the form
   *
   */
  private initForm() {
    this.form = this.fb.group({
      attachment_type:['', Validators.required] ,
      description:['', Validators.required] ,
      file:['', Validators.required] ,
    });
  }

  next(){
    this.articleSubmitObserveService.submitOObserve(ArticleSubmitPhases.SUBMIT());

  }

  back(){
    this.articleSubmitObserveService.submitOObserve(ArticleSubmitPhases.JUDGES());
  }

  submitForm () {
    const controls = this.form.controls;
    /** showing Errors  */
    if (this.form.invalid) {
      return this.formErrorService.markAsTouched(controls);
    }

    const model = new ArticleAttachmentsModel(null);
    model.attachment_type.id = controls['attachment_type'].value;
    model.description = controls['description'].value;
    model.file = controls['file'].value;
    model.article_id = this.article_id;

    this.ngxService.start();

    // call service to store Banner
    this.service.createFormData(model).subscribe(resp => {
      this.form.reset();
      this.service.articleOObserve(true);
      this.get();
    } , handler => {
      let error = handler.error.message;
      this.toastr.error(error);
      this.ngxService.stop();
    });
  }

  get(){
    this.articleService.get(this.article_id).subscribe(resp => {
      this.articleObserveService.articleOObserve(resp);
      this.ngxService.stop();
      this.toastr.success(this.translateService.instant('submit_article.msg.add_attachments_success'),
        this.translateService.instant('submit_article.toast_title.add_attachment'));
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
