import {Component, OnInit} from '@angular/core';
import {UrlName} from '../../../core/global/url.name';

@Component({
  selector: 'app-login-required',
  templateUrl: './login-required.component.html',
  styleUrls: ['./login-required.component.scss']
})
export class LoginRequiredComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  goToLogin() {
    return '/' + UrlName.login();
  }
}
