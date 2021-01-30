import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ArticleModel} from '../../../models/article-module/article.model';

@Injectable({
	providedIn: 'root'
})

export class ArticleObserveService {

  private content_observe= new BehaviorSubject(null);
  public content = this.content_observe.asObservable();


  articleOObserve(message: ArticleModel) {
    this.content_observe.next(message)
  }


}
