import {ChangeDetectorRef, Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {LangService} from './core/services/lang.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {HomeService} from './core/services/Section-Module/Home.service';
import {HomeModel} from './core/models/section-module/home.model';
import {AccountDependenciesService} from './core/services/Basic-Module/account.dependencies.service';
import {AccountDependenciesModel} from './core/models/Basic-Module/account.dependencies.model';
import {LocalStorageService} from './core/services/localStorage.service';
import {ArticleDependenciesModel} from './core/models/pre-article-module/article.dependencies.model';
import {ArticleDependenciesService} from './core/services/pre-article-Module/Article.Dependencies.service';
import {ProfileService} from './core/services/User-Module/profile.service';
import {ProfileModel} from './core/models/User-Module/profile.model';
import {GlobalConfig} from './core/global/global.config';
import {DependenciesModel} from './core/models/section-module/dependencies.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, DoCheck {
  title = '';
  homeModel: HomeModel;
  dependenciesModel: DependenciesModel;

  accountDependenciesModel:AccountDependenciesModel;
  articleDependenciesModel:ArticleDependenciesModel;
  profileModel:ProfileModel;

  is_home_load:boolean;
  is_dependencies_load:boolean;



  constructor(private langService: LangService,
              private homeService:HomeService,
              private articleDependenciesService: ArticleDependenciesService,
              private accountDependenciesService: AccountDependenciesService,
              protected profileService: ProfileService,
              private LocalStorageService:LocalStorageService,
              private ngxService: NgxUiLoaderService,
              private cdr:ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.langService.loadStyle();
    this.ngxService.start();
    this.is_home_load = false;
    this.is_dependencies_load = false;
    this.getHomeAPI();
    this.getDependencies();
  }

  getHomeAPI(){
    this.homeService.get().subscribe(value => {
      this.homeModel  = value;
      this.homeService.homeContent(this.homeModel);
      this.is_home_load = true;
      this.cdr.markForCheck();

      // if (this.LocalStorageService.getToken()){
      //   this.getAccountProfile();
      // }
      // else{
      //   this.ngxService.stop();
      // }

      // this.getAccountDependency();
      // this.getHArticleDependencies();
    });
  }

  getDependencies(){
    this.ngxService.start();
    this.homeService.getDependencies().subscribe(value => {
      this.dependenciesModel  = value;
      this.homeService.dependenciesContent(this.dependenciesModel);
      this.is_dependencies_load = true;
      this.cdr.markForCheck();
    });
  }

  getHArticleDependencies(){
    let articleDependencies = this.LocalStorageService.getWithExpiry('article_dependency');
    if (!articleDependencies){
      this.articleDependenciesService.get().subscribe(
        (resp) => {
          this.articleDependenciesModel = resp;
          this.articleDependenciesService.articleContent(this.articleDependenciesModel);
          this.LocalStorageService.setWithExpiry('article_dependency',
            this.articleDependenciesModel,GlobalConfig.calculateTTL(7));
          this.cdr.markForCheck();
        }, error => {
          this.articleDependenciesService = null;
          this.cdr.markForCheck();
        });
    }
    else{
      this.articleDependenciesService.articleContent(articleDependencies);
    }
  }

  getAccountDependency(){

    let accountDependencies = this.LocalStorageService.getWithExpiry('account_dependency');
    if (!accountDependencies){
      this.accountDependenciesService.get().subscribe(
        (resp) => {
          this.accountDependenciesModel = resp;
          this.accountDependenciesService.accountContent(this.accountDependenciesModel);
          this.LocalStorageService.setWithExpiry('account_dependency',
            this.accountDependenciesModel,GlobalConfig.calculateTTL(7));
          this.cdr.markForCheck();
        }, error => {
          this.accountDependenciesModel = null;
          this.cdr.markForCheck();
        });
    }
    else{
      this.accountDependenciesService.accountContent(accountDependencies);
    }

  }

  getAccountProfile(){

    let profile = this.LocalStorageService.getWithExpiry('profile');
    if (!profile){
      this.profileService.get().subscribe(
        (resp) => {
          this.profileModel = resp;
          this.profileService.profileContent(this.profileModel);
          this.LocalStorageService.setWithExpiry('profile',
            this.profileModel,GlobalConfig.calculateTTL(7));
          this.cdr.markForCheck();
          this.ngxService.stop();
        }, error => {
          this.profileModel = null;
          this.ngxService.stop();
          this.cdr.markForCheck();
        });
    }
    else{
      this.profileService.profileContent(profile);
      this.ngxService.stop();
    }
  }

  ngDoCheck(): void {
    if (this.is_home_load && this.is_dependencies_load){
      this.ngxService.stop();
    }
  }

}
