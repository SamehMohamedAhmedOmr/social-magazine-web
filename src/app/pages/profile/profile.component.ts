import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {AuthNoticeService} from '../../core/services/auth-notice.service';
import {FormErrorService} from '../../core/services/FormError.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ProfileService} from '../../core/services/User-Module/profile.service';
import {ActivatedRoute, Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {ProfileModel} from '../../core/models/User-Module/profile.model';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {ToastrService} from 'ngx-toastr';
import {LocalStorageService} from '../../core/services/localStorage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  form: FormGroup;
  educational_form: FormGroup;

  model: ProfileModel;

  is_result:boolean = false;

  constructor(private formBuilder: FormBuilder ,
              private service: ProfileService,
              private formErrorService: FormErrorService,
              private route: ActivatedRoute,
              private router:Router,
              private cdr: ChangeDetectorRef,
              private ngxService: NgxUiLoaderService,
              private LocalStorageService:LocalStorageService,
              private toastr: ToastrService,
              private authNoticeService: AuthNoticeService,
              public translateService : TranslateService) { }

  ngOnInit(): void {
    this.profileSubscribe();
  }

  private profileSubscribe(){
    this.service.content.subscribe(model => {
      if (model){
        this.model = model;
        this.initializeForm();
        this.is_result = true;
      }
    });
  }


  private get() {
    this.service.get().subscribe(
      (data) => {

        this.model = data;
        this.service.profileContent(this.model);
        this.LocalStorageService.setWithExpiry('profile',
          this.model,this.calculateTTL(7));

        this.cdr.markForCheck();
        this.ngxService.stop();
      } , error => {
        this.authNoticeService.setNotice(this.translateService.instant('COMMON.Item_not_found',
          {name : null}),
          'danger');
        this.ngxService.stop();
        this.cdr.markForCheck();
      }
    );

  }

  /**
   * Initiate the form
   *
   */
  initializeForm() {

    this.form = this.formBuilder.group({
      // Basic Data
      first_name:[this.model.first_name, Validators.required] ,
      family_name:[this.model.family_name, Validators.required] ,
      email:[this.model.email, Validators.required] ,
      gender:[this.model.gender?.id, Validators.required] ,
      phone:[this.model.phone_number, Validators.required] ,
      country:[this.model.country?.id, Validators.required] ,


      // Additional Data
      alternative_email:[this.model.alternative_email],
      address:[this.model.address] ,
    });

    this.educational_form = this.formBuilder.group({
      // Educational Data
      educational_degree:[this.model.educational_degree?.id, Validators.required] ,
      educational_level:[this.model.educational_level?.id, Validators.required] ,
      title:[this.model.title?.id, Validators.required] ,
    });
    this.cdr.markForCheck();
    this.ngxService.stop();
  }

  updateForm () {
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

    this.model = new ProfileModel(null);

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

    this.ngxService.start();
    this.service.update(this.model).subscribe(resp => {
      this.toastr.success(this.translateService.instant('profile.success'),
        this.translateService.instant('Components.USERS.profile'));
        this.get();
    } , handler => {
      this.toastr.error(handler.error.message, this.translateService.instant('error'));

      this.ngxService.stop();
      this.cdr.markForCheck();
    });
  }


  calculateTTL(days){
    let hour = 3600;
    let day = hour * 24;
    return day * days;
  }
}
