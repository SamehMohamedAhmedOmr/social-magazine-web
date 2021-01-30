import { Component, OnInit } from '@angular/core';
import {UrlName} from '../../../core/global/url.name';

@Component({
  selector: 'app-complete-profile-data',
  templateUrl: './complete-profile-data.component.html',
  styleUrls: ['./complete-profile-data.component.scss']
})
export class CompleteProfileDataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  getProfile(){
    return '/' + UrlName.profile();
  }
}
