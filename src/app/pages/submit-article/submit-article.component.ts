import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ProfileService} from '../../core/services/User-Module/profile.service';
import {ProfileModel} from '../../core/models/User-Module/profile.model';
import {UrlName} from '../../core/global/url.name';
import {LocalStorageService} from '../../core/services/localStorage.service';

@Component({
  selector: 'app-submit-article',
  templateUrl: './submit-article.component.html',
  styleUrls: ['./submit-article.component.scss']
})
export class SubmitArticleComponent implements OnInit, OnChanges {

  profileModel: ProfileModel;

  profile_complete_flag:boolean = false;

  token:string = null;

  constructor(private profileService: ProfileService,
              public localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.profileSubscribe();
    this.checkToken();
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
    else{
      this.profile_complete_flag = true;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.checkToken();
  }

  checkToken(){
    this.token = this.localStorageService.getToken();
  }

}
