import {Component, OnInit} from '@angular/core';
import {UrlName} from '../../../core/global/url.name';
import {LocalStorageService} from '../../../core/services/localStorage.service';
import {AuthService} from '../../../core/services/User-Module/auth.service';
import {ToastrService} from 'ngx-toastr';
import {Router} from '@angular/router';
import {TranslateService} from '@ngx-translate/core';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'app-account-links',
  templateUrl: './account-links.component.html',
  styleUrls: ['./account-links.component.scss']
})
export class AccountLinksComponent implements OnInit {

  constructor(public localStorageService :LocalStorageService,
              private toastr: ToastrService,
              private router: Router,
              private ngxService: NgxUiLoaderService,
              public translateService: TranslateService,
              private authService: AuthService) {
  }

  ngOnInit(): void {
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
      localStorage.removeItem('first_name');

      this.ngxService.stop();

      this.toastr.success(this.translateService.instant('logout.success'),
        this.translateService.instant('PAGES.LOGOUT'));

      this.router.navigate(['/']).then();

    }, error => {
      this.ngxService.stop();
    });
  }
}
