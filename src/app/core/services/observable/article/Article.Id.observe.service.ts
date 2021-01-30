import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
	providedIn: 'root'
})

export class ArticleIdObserveService {


  private content_observe= new BehaviorSubject(null);
  public content = this.content_observe.asObservable();


  articleIdObserve(message: number) {
    this.content_observe.next(message)
  }


}
