import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormErrorService} from '../../../../core/services/FormError.service';
import {TranslateService} from '@ngx-translate/core';
import {ArticleSubmitObserveService} from '../../../../core/services/observable/article/Article.submit.observe.service';
import {ArticleSubmitPhases} from '../../../../core/global/article.submit.phases';
import {ManageArticleService} from '../../../../core/services/Article-Module/manage.article.service';
import {ArticleObserveService} from '../../../../core/services/observable/article/Article.observe.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {ToastrService} from 'ngx-toastr';
import {ArticleSuggestedJudgesService} from '../../../../core/services/Article-Module/article-suggested-judges.service';
import {ArticleSuggestedJudgesModel} from '../../../../core/models/article-module/article.suggested.judges.model';
import {ArticleModel} from '../../../../core/models/article-module/article.model';

@Component({
  selector: 'app-article-suggested-judges-data',
  templateUrl: './suggested-judges.component.html',
  styleUrls: ['./suggested-judges.component.scss']
})
export class SuggestedJudgesComponent implements OnInit {

  @Input() article_id:number = null;
  @Input() article:ArticleModel = null;

  form: FormGroup;
  educational_form: FormGroup;
  model:ArticleSuggestedJudgesModel;

  allow_add:boolean = false;


  constructor(private formBuilder: FormBuilder ,
              private service: ArticleSuggestedJudgesService,
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
  }



  /**
   * Initiate the form
   *
   */
  private initForm() {
    this.form = this.formBuilder.group({
      // Basic Data
      first_name:['', Validators.required] ,
      family_name:['', Validators.required] ,
      email:['', Validators.required] ,
      gender:['', Validators.required] ,
      phone:['', Validators.required] ,
      country:['', Validators.required] ,


      // Additional Data
      alternative_email:[''],
      address:[''] ,
    });

    this.educational_form = this.formBuilder.group({
      // Educational Data
      educational_degree:['', Validators.required] ,
      educational_level:['', Validators.required] ,
      title:['', Validators.required] ,
    });
  }

  next(){
    this.articleSubmitObserveService.submitOObserve(ArticleSubmitPhases.ATTACHMENTS());

  }

  back(){
    this.articleSubmitObserveService.submitOObserve(ArticleSubmitPhases.AUTHORS());
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


    const controls_educational_form = this.educational_form.controls;
    /** showing Errors  */
    if (this.educational_form.invalid) {
      return this.formErrorService.markAsTouched(controls_educational_form);
    }

    this.model = new ArticleSuggestedJudgesModel(null);

    this.model.initialLists();

    this.model.first_name = controls['first_name'].value;
    this.model.family_name = controls['family_name'].value;
    this.model.email = controls['email'].value;
    this.model.gender.id = controls['gender'].value;
    this.model.phone_number = controls['phone'].value;
    this.model.country.id = controls['country'].value;

    this.model.alternative_email = controls['alternative_email'].value;
    this.model.address = controls['address'].value;

    this.model.title.id = controls_educational_form['title'].value;
    this.model.educational_degree.id = controls_educational_form['educational_degree'].value;
    this.model.educational_level.id = controls_educational_form['educational_level'].value;

    this.model.article_id = this.article_id;

    this.ngxService.start();

    this.service.create(this.model).subscribe(resp => {
      this.form.reset();
      this.educational_form.reset();

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
      this.allow_add = false;
      this.toastr.success(this.translateService.instant('submit_article.msg.add_suggested_judge_success'),
        this.translateService.instant('submit_article.toast_title.add_suggested_judge'));
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

  showForm() {
    this.allow_add = true;
  }

  cancelForm() {
    this.allow_add = false;
  }

}
