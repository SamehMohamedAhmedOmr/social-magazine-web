import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ArticleAttachmentsModel} from '../../models/article-module/article.attachments.model';
import {ArticleAttachmentsSerializer} from '../../Serializers/Article-Module/article.attachments.serializer';

@Injectable({
	providedIn: 'root'
})

export class ArticleAttachmentsService {

  protected http: HttpClient;
  protected url: string;
  protected endpoint: string;
  protected serializer: ArticleAttachmentsSerializer;

  private content_observe= new BehaviorSubject(null);
  public content = this.content_observe.asObservable();

  constructor(Http: HttpClient) {
    this.http = Http;
    this.url = environment.url();
    this.endpoint = 'article-attachments';
    this.serializer = new ArticleAttachmentsSerializer();
  }

  public createFormData(item: any): Observable<ArticleAttachmentsModel> {
    return this.http
      .post<ArticleAttachmentsModel>(`${this.url}${this.endpoint}`, this.serializer.toFormData(item))
      .pipe(map(data => this.serializer.fromJson(data) as ArticleAttachmentsModel));
  }


  public get(id: number, article_id: number): Observable<ArticleAttachmentsModel> {
    const params = {};

    if (article_id) {
      params['article_id'] = article_id;
    }

    return this.http
      .get(`${this.url}${this.endpoint}/${id}`, {
        params: params
      })
      .pipe(map((data: any) => this.serializer.fromJson(data) as ArticleAttachmentsModel));
  }

  public list(article_id: number): Observable<ArticleAttachmentsModel[]> {
    const params = {};
    if (article_id) {
      params['id'] = article_id;
    }

    return this.http.get(`${this.url}${this.endpoint}`, {
      params: params
    }).pipe(map((data: any) => this.serializer.fromJsonList(data) as ArticleAttachmentsModel[]));
  }

  public delete(id: number, article_id: number) {
    const params = {};

    if (article_id) {
      params['article_id'] = article_id;
    }

    return this.http
      .delete(`${this.url}${this.endpoint}/${id}`, {
        params: params
      });
  }

  articleOObserve(message: boolean) {
    this.content_observe.next(message)
  }
}
