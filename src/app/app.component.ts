import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {LangService} from './core/services/lang.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {HomeService} from './core/services/Section-Module/Home.service';
import {HomeModel} from './core/models/section-module/home.model';
import {AccountDependenciesService} from './core/services/Basic-Module/account.dependencies.service';
import {AccountDependenciesModel} from './core/models/Basic-Module/account.dependencies.model';
import {LocalStorageService} from './core/services/localStorage.service';
import {ArticleDependenciesModel} from './core/models/pre-article-module/article.dependencies.model';
import {ArticleDependenciesService} from './core/services/pre-article-Module/Article.Dependencies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = '';
  homeModel: HomeModel;
  accountDependenciesModel:AccountDependenciesModel;
  articleDependenciesModel:ArticleDependenciesModel;

  constructor(private langService: LangService,
              private homeService:HomeService,
              private articleDependenciesService: ArticleDependenciesService,
              private accountDependenciesService: AccountDependenciesService,
              private LocalStorageService:LocalStorageService,
              private ngxService: NgxUiLoaderService,
              private cdr:ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.langService.loadStyle();
    this.getHomeAPI();
  }

  getHomeAPI(){
    this.ngxService.start();
    this.homeService.get().subscribe(value => {
      this.homeModel  = value;
      this.homeService.homeContent(this.homeModel);
      this.cdr.markForCheck();
      this.getAccountDependency();
      this.getHArticleDependencies();
      this.ngxService.stop();
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
            this.articleDependenciesModel,this.calculateTTL(7));
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
            this.accountDependenciesModel,this.calculateTTL(7));
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

  calculateTTL(days){
    let hour = 3600;
    let day = hour * 24;
    return day * days;
  }

}
