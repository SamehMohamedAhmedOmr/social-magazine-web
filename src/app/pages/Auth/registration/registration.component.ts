import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/User-Module/auth.service';
import {FormErrorService} from '../../../core/services/FormError.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {AuthNoticeService} from '../../../core/services/auth-notice.service';
import {HelperService} from '../../../core/services/helper.service';
import {AuthModel} from '../../../core/models/User-Module/Auth.model';
import {UrlName} from '../../../core/global/url.name';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private service: AuthService,
              private formErrorService: FormErrorService,
              private ngxService: NgxUiLoaderService,
              private route: ActivatedRoute,
              private router: Router,
              public translateService: TranslateService,
              private authNoticeService: AuthNoticeService,
              private helper: HelperService) {
  }

  form: FormGroup;

  ngOnInit(): void {
    this.initForm();
  }

  /**
   * Initiate the form
   *
   */
  private initForm() {
    this.form = this.fb.group({
      first_name:['', Validators.required] ,
      family_name:['', Validators.required] ,
      email:['', Validators.required] ,
      password:['', Validators.required] ,
      gender:['', Validators.required] ,
      phone:['', Validators.required] ,
      country:['', Validators.required] ,
      title:['', Validators.required] ,
    });
  }

  register() {
    const controls = this.form.controls;
    /** showing Errors  */
    if (this.form.invalid) {
      return this.formErrorService.markAsTouched(controls);
    }

    this.ngxService.start();

    const model = new AuthModel(null);
    model.email = controls['email'].value;
    model.password = controls['password'].value;

    model.first_name = controls['first_name'].value;
    model.family_name = controls['family_name'].value;

    model.gender_id = controls['gender'].value;
    model.phone_number = controls['phone'].value;

    model.country_id = controls['country'].value;
    model.title_id = controls['title'].value;

    this.service.register(model).subscribe(resp => {
      // this.form.reset();
      console.log(resp);
      this.ngxService.stop();
    }, handler => {
      this.ngxService.stop();
      this.authNoticeService.setNotice(this.helper.showingErrors(handler.error), 'danger');
    });
  }

  loginLink(){
    return  '/' + UrlName.login();
  }

}
