import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AdvisoryBodiesService} from '../../../../core/services/Section-Module/advisory.bodies.service';
import {FormErrorService} from '../../../../core/services/FormError.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {AuthNoticeService} from '../../../../core/services/auth-notice.service';
import {HelperService} from '../../../../core/services/helper.service';
import {AdvisoryBodyModel} from '../../../../core/models/section-module/advisory.body.model';
import {UrlName} from '../../../../core/global/url.name';
import {ArticleSubmitObserveService} from '../../../../core/services/observable/article/Article.submit.observe.service';
import {ArticleSubmitPhases} from '../../../../core/global/article.submit.phases';

@Component({
  selector: 'app-article-confirm-form',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  @Input() article_id:number = null;

  form: FormGroup;

  constructor(private fb: FormBuilder ,
              private service: AdvisoryBodiesService,
              public articleSubmitObserveService: ArticleSubmitObserveService,
              private formErrorService: FormErrorService,
              private route: ActivatedRoute,
              private router:Router,
              public translateService : TranslateService,
              private authNoticeService: AuthNoticeService,
              private helper: HelperService) {
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
      article_type_id:['', Validators.required] ,
      title_ar:['', Validators.required] ,
      title_en:['', Validators.required] ,
    });
  }

  back(){
    this.articleSubmitObserveService.submitOObserve(ArticleSubmitPhases.ATTACHMENTS());
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

    const model = new AdvisoryBodyModel(null);
    model.name = controls['name'].value;
    model.job = controls['job'].value;

    // call service to store Banner
    this.service.create(model).subscribe(resp => {
      this.form.reset();
      // TODO TOAST
      // this.router.navigate(['../'], { relativeTo: this.route }).then();
    } , handler => {
      // TODO TOAST
    });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {

  }

}
