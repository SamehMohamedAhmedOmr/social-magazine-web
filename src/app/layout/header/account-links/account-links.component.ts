import {Component, OnInit} from '@angular/core';
import {RoutesName} from '../../../core/global/routes.name';

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
    return '/' + RoutesName.login();
  }

  getRegister(){
    return '/' + RoutesName.register();
  }

  getProfile(){
    return '/' + RoutesName.profile();
  }

}
