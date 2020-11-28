import {Component, OnDestroy, OnInit} from '@angular/core';

import {ArticleSubmitPhases} from '../../../core/global/article.submit.phases';
import {ArticleIdObserveService} from '../../../core/services/observable/article/Article.Id.observe.service';
import {ArticleSubmitObserveService} from '../../../core/services/observable/article/Article.submit.observe.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit, OnDestroy {

  article_id:number = null;
  article_submit_status:string = null;

  constructor(public articleIdObserveService: ArticleIdObserveService,
              public articleSubmitObserveService: ArticleSubmitObserveService) {

  }

  ngOnInit(): void {
    this.subscribeSubmitArticle();
    this.subscribeArticleID();
  }

  subscribeSubmitArticle() {
    this.articleSubmitObserveService.content.subscribe(model => {
      this.article_submit_status = model;
    });
  }

  subscribeArticleID() {
    this.articleIdObserveService.content.subscribe(id => {
      this.article_id = id;
    });
  }

  checkINITIAL() {
    return this.article_submit_status == ArticleSubmitPhases.INITIAL();
  }

  checkKEYWORDS() {
    return this.article_submit_status == ArticleSubmitPhases.KEYWORDS();
  }

  checkAUTHORS() {
    return this.article_submit_status == ArticleSubmitPhases.AUTHORS();
  }

  checkJUDGES() {
    return this.article_submit_status == ArticleSubmitPhases.JUDGES();
  }

  checkATTACHMENTS() {
    return this.article_submit_status == ArticleSubmitPhases.ATTACHMENTS();
  }

  checkSUBMIT() {
    return this.article_submit_status == ArticleSubmitPhases.SUBMIT();
  }

  ngOnDestroy(): void {
    this.articleSubmitObserveService.submitOObserve(ArticleSubmitPhases.INITIAL());
  }

}
