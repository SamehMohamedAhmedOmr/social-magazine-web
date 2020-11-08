import {Component, OnInit} from '@angular/core';
import {UrlName} from '../../../core/global/url.name';

@Component({
  selector: 'app-account-links',
  templateUrl: './account-links.component.html',
  styleUrls: ['./account-links.component.scss']
})
export class AccountLinksComponent implements OnInit {

  constructor() {
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
