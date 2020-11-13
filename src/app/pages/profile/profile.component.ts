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
              private toastr: ToastrService,
              private authNoticeService: AuthNoticeService,
              public translateService : TranslateService) { }

  ngOnInit(): void {
    this.get();
  }

  private get() {
    this.ngxService.start();

    this.service.get().subscribe(
      (data) => {

        this.is_result = true;
        this.model = data;
        this.cdr.markForCheck();
        this.initializeForm();
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
      fax_number:[this.model.fax_number] ,
      alternative_email:[this.model.alternative_email],
      address:[this.model.address] ,
    });

    this.educational_form = this.formBuilder.group({
      // Educational Data
      educational_degree:[this.model.educational_degree?.id, Validators.required] ,
      educational_level:[this.model.educational_level?.id, Validators.required] ,
      title:[this.model.title?.id, Validators.required] ,
      educational_field:[this.model.educational_field] ,
      university:[this.model.university] ,
      faculty:[this.model.faculty] ,
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

    this.model.initialLists();

    this.model.first_name = controls['first_name'].value;
    this.model.family_name = controls['family_name'].value;
    this.model.email = controls['email'].value;
    this.model.gender.id = controls['gender'].value;
    this.model.phone_number = controls['phone'].value;
    this.model.country.id = controls['country'].value;

    this.model.fax_number = controls['fax_number'].value;
    this.model.alternative_email = controls['alternative_email'].value;
    this.model.address = controls['address'].value;

    this.model.title.id = controls_educational_form['title'].value;
    this.model.educational_degree.id = controls_educational_form['educational_degree'].value;
    this.model.educational_level.id = controls_educational_form['educational_level'].value;
    this.model.educational_field = controls_educational_form['educational_field'].value;
    this.model.university = controls_educational_form['university'].value;
    this.model.faculty = controls_educational_form['faculty'].value;

    this.ngxService.start();
    this.service.update(this.model).subscribe(resp => {
      this.toastr.success(this.translateService.instant('profile.success'),
        this.translateService.instant('Components.USERS.profile'));
      this.cdr.markForCheck();
      this.ngxService.stop();

    } , handler => {
      this.toastr.error(handler.error.message, this.translateService.instant('error'));

      this.ngxService.stop();
      this.cdr.markForCheck();
    });
  }


}
