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
  selector: 'app-article-authors-form',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {

  @Input() article_id:number = null;

  form: FormGroup;
  educational_form: FormGroup;

  constructor(private formBuilder: FormBuilder ,
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
    this.articleSubmitObserveService.submitOObserve(ArticleSubmitPhases.JUDGES());

  }

  back(){
    this.articleSubmitObserveService.submitOObserve(ArticleSubmitPhases.KEYWORDS());
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
