import {Component, OnDestroy, OnInit} from '@angular/core';

import {ArticleSubmitPhases} from '../../../core/global/article.submit.phases';
import {ArticleIdObserveService} from '../../../core/services/observable/article/Article.Id.observe.service';
import {ArticleSubmitObserveService} from '../../../core/services/observable/article/Article.submit.observe.service';
import {ArticleObserveService} from '../../../core/services/observable/article/Article.observe.service';
import {ArticleModel} from '../../../core/models/article-module/article.model';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.scss']
})
export class ArticleFormComponent implements OnInit, OnDestroy {

  article_id:number = null;
  article_submit_status:string = null;
  article:ArticleModel = null;

  constructor(public articleIdObserveService: ArticleIdObserveService,
              public articleObserveService: ArticleObserveService,
              public articleSubmitObserveService: ArticleSubmitObserveService) {

  }

  ngOnInit(): void {
    this.subscription();
  }

  subscription() {
    this.articleSubmitObserveService.content.subscribe(status => {
      this.article_submit_status = status;
    });

    this.articleIdObserveService.content.subscribe(id => {
      this.article_id = id;
    });

    this.articleObserveService.content.subscribe(model => {
      this.article = model;
    });

    this.article = new ArticleModel(this.article_id);
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

    this.articleIdObserveService.articleIdObserve(null);
    this.articleObserveService.articleOObserve(null);
  }

}
