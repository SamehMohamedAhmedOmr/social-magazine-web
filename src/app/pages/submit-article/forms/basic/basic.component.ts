import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';
import {AuthNoticeService} from '../../../../core/services/auth-notice.service';
import {FormErrorService} from '../../../../core/services/FormError.service';
import {AdvisoryBodiesService} from '../../../../core/services/Section-Module/advisory.bodies.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HelperService} from '../../../../core/services/helper.service';
import {AdvisoryBodyModel} from '../../../../core/models/section-module/advisory.body.model';
import {UrlName} from '../../../../core/global/url.name';

@Component({
  selector: 'app-article-basic-data',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {


  form: FormGroup;
  constructor(private fb: FormBuilder ,
              private service: AdvisoryBodiesService,
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


  clearForm() {
    this.form.reset();
  }

  next(){
    let target = UrlName.submitArticle() + '/' + UrlName.ArticleContent();
    this.router.navigate([target]).then();
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
