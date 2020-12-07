import {Component, OnInit} from '@angular/core';
import {UrlName} from '../../../core/global/url.name';
import {LocalStorageService} from '../../../core/services/localStorage.service';
import {AuthService} from '../../../core/services/User-Module/auth.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {ProfileService} from '../../../core/services/User-Module/profile.service';
import {ProfileModel} from '../../../core/models/User-Module/profile.model';

@Component({
  selector: 'app-account-links',
  templateUrl: './account-links.component.html',
  styleUrls: ['./account-links.component.scss']
})
export class AccountLinksComponent implements OnInit {

  profile:ProfileModel;

  constructor(public localStorageService :LocalStorageService,
              private toastr: ToastrService,
              private profileService: ProfileService,
              private router: Router,
              private ngxService: NgxUiLoaderService,
              public translateService: TranslateService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
    this.profileSubscribe();
  }

  private profileSubscribe(){
    this.profileService.content.subscribe(model => {
      if (model){
        this.profile = model;
      }
    });
  }

  getLoginPage(){
    return '/' + UrlName.login();
  }

  getRegister(){
    return '/' + UrlName.register();
  }

  getProfile(){
    return '/' + UrlName.profile();
  }

  getMyArticle(){
    return '/' + UrlName.myArticle();
  }

  logout() {
    this.ngxService.start();

    this.authService.logout().subscribe(resp => {

      localStorage.removeItem('token');
      localStorage.removeItem('token_expired');
      localStorage.removeItem('profile');

      this.ngxService.stop();

      this.toastr.success(this.translateService.instant('logout.success'),
        this.translateService.instant('PAGES.LOGOUT'));

      this.router.navigate(['/']).then();
      window.location.reload();

    }, error => {
      this.ngxService.stop();
    });
  }
}
