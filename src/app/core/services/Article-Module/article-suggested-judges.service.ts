import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {PaginateParams} from '../../models/paginateParams.interface';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ArticleSuggestedJudgesSerializer} from '../../Serializers/Article-Module/article.suggested.judges.serializer';
import {ArticleSuggestedJudgesModel} from '../../models/article-module/article.suggested.judges.model';

@Injectable({
	providedIn: 'root'
})

export class ArticleSuggestedJudgesService{

  protected http: HttpClient;
  protected url: string;
  protected endpoint: string;
  protected serializer: ArticleSuggestedJudgesSerializer;

  constructor(Http: HttpClient) {
    this.http = Http;
    this.url = environment.url();
    this.endpoint = 'manage-judges';
    this.serializer = new ArticleSuggestedJudgesSerializer();
  }

  public create(item: ArticleSuggestedJudgesModel): Observable<ArticleSuggestedJudgesModel> {
    return this.http
      .post<ArticleSuggestedJudgesModel>(`${this.url}${this.endpoint}`, this.serializer.toJson(item))
      .pipe(map(data => this.serializer.fromJson(data) as ArticleSuggestedJudgesModel));
  }

  public update(id: number, item: ArticleSuggestedJudgesModel): Observable<ArticleSuggestedJudgesModel> {
    return this.http
      .put<ArticleSuggestedJudgesModel>(`${this.url}${this.endpoint}/${id}`,
        this.serializer.toJson(item))
      .pipe(map(data => this.serializer.fromJson(data) as ArticleSuggestedJudgesModel));
  }


  public get(id: number, article_id: number): Observable<ArticleSuggestedJudgesModel> {
    const params = {};

    if (article_id) {
      params['article_id'] = article_id;
    }

    return this.http
      .get(`${this.url}${this.endpoint}/${id}`, {
        params: params
      })
      .pipe(map((data: any) => this.serializer.fromJson(data) as ArticleSuggestedJudgesModel));
  }

  public list(article_id: number): Observable<ArticleSuggestedJudgesModel[]> {
    const params = {};

    if (article_id) {
      params['id'] = article_id;
    }

    return this.http.get(`${this.url}${this.endpoint}`, {
      params: params
    }).pipe(map((data: any) => this.serializer.fromJsonList(data) as ArticleSuggestedJudgesModel[]));
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
