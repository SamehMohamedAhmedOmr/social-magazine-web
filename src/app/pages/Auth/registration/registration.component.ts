import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../../core/services/User-Module/auth.service';
import {FormErrorService} from '../../../core/services/FormError.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {AuthModel} from '../../../core/models/User-Module/Auth.model';
import {UrlName} from '../../../core/global/url.name';
import {LocalStorageService} from '../../../core/services/localStorage.service';
import {ToastrService} from 'ngx-toastr';
import {ProfileService} from '../../../core/services/User-Module/profile.service';
import {ProfileModel} from '../../../core/models/User-Module/profile.model';
import {GlobalConfig} from '../../../core/global/global.config';

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
              private cdr: ChangeDetectorRef,
              public translateService: TranslateService,
              protected profileService: ProfileService,
              private LocalStorageService:LocalStorageService,
              private toastr: ToastrService,
              public localStorageService:LocalStorageService) {
  }

  form: FormGroup;
  profileModel:ProfileModel;

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
      this.localStorageService.setItem('token', resp.token);
      this.localStorageService.setItem('first_name', resp.first_name);
      this.localStorageService.setItem('token_expired', String(resp.expire_at));

      this.getAccountProfile();

    }, handler => {
      this.ngxService.stop();
      this.toastr.error(handler.error.message, this.translateService.instant('error'))
    });
  }

  loginLink(){
    return  '/' + UrlName.login();
  }

  getAccountProfile(){

    let profile = this.LocalStorageService.getWithExpiry('profile');
    if (!profile){
      this.profileService.get().subscribe(
        (resp) => {
          this.profileModel = resp;
          this.profileService.profileContent(this.profileModel);
          this.LocalStorageService.setWithExpiry('profile',
            this.profileModel,GlobalConfig.calculateTTL(7));
          this.cdr.markForCheck();
          this.ngxService.stop();

          this.toastr.success(this.translateService.instant('register.success'),
            this.translateService.instant('PAGES.REGISTER'));

          this.router.navigate(['/']).then();
        }, error => {
          this.profileModel = null;
          this.ngxService.stop();
          this.cdr.markForCheck();
        });
    }
    else{
      this.profileService.profileContent(profile);
      this.ngxService.stop();
    }
  }

}
