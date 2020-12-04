import { Component, OnInit } from '@angular/core';
import {ProfileService} from '../../core/services/User-Module/profile.service';
import {ProfileModel} from '../../core/models/User-Module/profile.model';
import {UrlName} from '../../core/global/url.name';

@Component({
  selector: 'app-submit-article',
  templateUrl: './submit-article.component.html',
  styleUrls: ['./submit-article.component.scss']
})
export class SubmitArticleComponent implements OnInit {

  profileModel: ProfileModel;

  profile_complete_flag:boolean = true;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.profileSubscribe();
  }

  private profileSubscribe(){
    this.profileService.content.subscribe(model => {
      if (model){
        this.profileModel = model;
        this.profileDataCheck();
      }
    });
  }

  getMyArticle(){
    return '/' + UrlName.myArticle();
  }

  profileDataCheck(){
    if (!this.profileModel.first_name ||
      !this.profileModel.phone_number ||
      !this.profileModel.email ||
      !this.profileModel.educational_level ||
      !this.profileModel.educational_degree) {
      this.profile_complete_flag = false;
    }
  }

}
