import {Component, OnInit} from '@angular/core';
import {ArticleSubmitPhases} from '../../../core/global/article.submit.phases';
import {ArticleSubmitObserveService} from '../../../core/services/observable/article/Article.submit.observe.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  article_submit_status:string = null;

  constructor(public articleSubmitObserveService: ArticleSubmitObserveService) {

  }

  ngOnInit(): void {
    this.subscribeSubmitArticle();
  }

  subscribeSubmitArticle() {
    this.articleSubmitObserveService.content.subscribe(model => {
      this.article_submit_status = model;
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
}
