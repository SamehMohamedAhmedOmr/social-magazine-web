import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ArticleModel} from '../../../core/models/article-module/article.model';
import {ManageArticleService} from '../../../core/services/Article-Module/manage.article.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UrlName} from '../../../core/global/url.name';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  article: ArticleModel;
  isLoadingResults:boolean = false;

  article_id:number = null;

  constructor(private service: ManageArticleService,
              private route: ActivatedRoute,
              private router:Router,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.subscribeRoutes();
  }


  subscribeRoutes(){
    this.route.params.subscribe((resp) => {
      this.article_id = resp['id'];
      this.get();
    });
  }

  get(){
    this.isLoadingResults = true;

    this.service.get(this.article_id).subscribe(resp => {
      this.isLoadingResults = false;
      this.article = resp;
      this.cdr.markForCheck();
    } , handler => {
      this.router.navigate(['/' + UrlName.myArticle()]).then();
      this.isLoadingResults = false;
      this.cdr.markForCheck();
    });
  }

}
