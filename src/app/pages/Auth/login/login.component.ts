import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FormErrorService} from '../../../core/services/FormError.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {AuthNoticeService} from '../../../core/services/auth-notice.service';
import {HelperService} from '../../../core/services/helper.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {AuthModel} from '../../../core/models/User-Module/Auth.model';
import {AuthService} from '../../../core/services/User-Module/auth.service';
import {UrlName} from '../../../core/global/url.name';
import {ToastrService} from 'ngx-toastr';
import {LocalStorageService} from '../../../core/services/localStorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder,
              private service: AuthService,
              private formErrorService: FormErrorService,
              private ngxService: NgxUiLoaderService,
              private route: ActivatedRoute,
              private router: Router,
              public translateService: TranslateService,
              private toastr: ToastrService,
              public localStorageService:LocalStorageService,
              private cdr: ChangeDetectorRef) {
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
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  submitForm() {
    const controls = this.form.controls;
    /** showing Errors  */
    if (this.form.invalid) {
      return this.formErrorService.markAsTouched(controls);
    }

    this.ngxService.start();

    const model = new AuthModel(null);
    model.email = controls['email'].value;
    model.password = controls['password'].value;

    this.service.login(model).subscribe(resp => {
      this.localStorageService.setItem('token', resp.token);
      this.localStorageService.setItem('first_name', resp.first_name);
      this.localStorageService.setItem('token_expired', String(resp.expire_at));

      this.ngxService.stop();

      this.toastr.success(this.translateService.instant('login.success'),
        this.translateService.instant('PAGES.LOGIN'));

      this.router.navigate(['/']).then();

    }, handler => {
      this.ngxService.stop();
      this.toastr.error(handler.error.message, this.translateService.instant('error'))
    });
  }

  registerLink(){
    return  '/' + UrlName.register();
  }

}
