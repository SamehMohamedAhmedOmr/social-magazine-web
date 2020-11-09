import {Component, OnInit} from '@angular/core';
import {UrlName} from '../../../core/global/url.name';
import {LocalStorageService} from '../../../core/services/localStorage.service';

@Component({
  selector: 'app-account-links',
  templateUrl: './account-links.component.html',
  styleUrls: ['./account-links.component.scss']
})
export class AccountLinksComponent implements OnInit {

  constructor(public localStorageService :LocalStorageService) {
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

}
