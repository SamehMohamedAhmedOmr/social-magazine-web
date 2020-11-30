import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {PaginateParams} from '../../models/paginateParams.interface';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ArticleAuthorsModel} from '../../models/article-module/article.authors.model';
import {ArticleAuthorsSerializer} from '../../Serializers/Article-Module/article.authors.serializer';


@Injectable({
	providedIn: 'root'
})

export class ArticleAuthorsService {

  protected http: HttpClient;
  protected url: string;
  protected endpoint: string;
  protected serializer: ArticleAuthorsSerializer;

  constructor(Http: HttpClient) {
    this.http = Http;
    this.url = environment.url();
    this.endpoint = 'article-authors';
    this.serializer = new ArticleAuthorsSerializer();
  }

  public create(item: ArticleAuthorsModel): Observable<ArticleAuthorsModel> {
    return this.http
      .post<ArticleAuthorsModel>(`${this.url}${this.endpoint}`, this.serializer.toJson(item))
      .pipe(map(data => this.serializer.fromJson(data) as ArticleAuthorsModel));
  }

  public update(id: number, item: ArticleAuthorsModel): Observable<ArticleAuthorsModel> {
    return this.http
      .put<ArticleAuthorsModel>(`${this.url}${this.endpoint}/${id}`,
        this.serializer.toJson(item))
      .pipe(map(data => this.serializer.fromJson(data) as ArticleAuthorsModel));
  }


  public get(id: number, article_id: number): Observable<ArticleAuthorsModel> {

    const params = {};

    if (article_id) {
      params['article_id'] = article_id;
    }

    return this.http
      .get(`${this.url}${this.endpoint}/${id}`, {
        params: params
      })
      .pipe(map((data: any) => this.serializer.fromJson(data) as ArticleAuthorsModel));
  }

  public list(article_id: number): Observable<ArticleAuthorsModel[]> {
    const params = {};

    if (article_id) {
      params['id'] = article_id;
    }

    return this.http.get(`${this.url}${this.endpoint}`, {
      params: params
    }).pipe(map((data: any) => this.serializer.fromJsonList(data) as ArticleAuthorsModel[]));
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
}
