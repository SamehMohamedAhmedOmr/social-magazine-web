import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {ArticleSubmitPhases} from '../../../global/article.submit.phases';

@Injectable({
	providedIn: 'root'
})

export class ArticleSubmitObserveService {

  private content_observe= new BehaviorSubject(ArticleSubmitPhases.INITIAL());
  public content = this.content_observe.asObservable();


  submitOObserve(message: string) {
    this.content_observe.next(message)
  }


}
