import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {PaginateParams} from '../../models/paginateParams.interface';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ArticleModel} from '../../models/article-module/article.model';
import {ArticleSerializer} from '../../Serializers/Article-Module/article.serializer';

@Injectable({
  providedIn: 'root'
})

export class ArticleService {

  protected http: HttpClient;
  protected url: string;
  protected endpoint: string;
  protected serializer: ArticleSerializer;

  constructor(Http: HttpClient) {
    this.http = Http;
    this.url = environment.url();
    this.endpoint = 'manage-articles';
    this.serializer = new ArticleSerializer();
  }

  public create(item: ArticleModel): Observable<ArticleModel> {
    return this.http
      .post<ArticleModel>(`${this.url}${this.endpoint}`, this.serializer.toJson(item))
      .pipe(map(data => this.serializer.fromJson(data) as ArticleModel));
  }

  public updateInfo(item: ArticleModel): Observable<ArticleModel> {

    let api_route = this.endpoint + '/info';

    return this.http
      .post<ArticleModel>(`${this.url}${api_route}`, this.serializer.updateInfo(item))
      .pipe(map(data => this.serializer.fromJson(data) as ArticleModel));
  }

  public confirm(id: number, item: ArticleModel): Observable<ArticleModel> {

    let api_route = this.endpoint + '/confirm';

    return this.http
      .put<ArticleModel>(`${this.url}${api_route}/${id}`,
        this.serializer.toJson(item))
      .pipe(map(data => this.serializer.confirm(data) as ArticleModel));
  }


  public get(id: number): Observable<ArticleModel> {
    return this.http
      .get(`${this.url}${this.endpoint}/${id}`)
      .pipe(map((data: any) => this.serializer.fromJson(data) as ArticleModel));
  }

  public list(paginationParams: PaginateParams, paginate = 1): Observable<ArticleModel[]> {
    const params = {};
    if (paginationParams) {
      if (paginationParams.search_key) {
        params['search_key'] = paginationParams.search_key;
      }
      if (paginationParams.active) {
        params['is_active'] = paginationParams.active;
      }
      if (paginationParams.per_page) {
        params['per_page'] = paginationParams.per_page;
      }
      if (paginationParams.sort_order) {
        params['sort_order'] = paginationParams.sort_order;
      }
      if (paginationParams.next_page_index) {
        params['page'] = paginationParams.next_page_index + 1;
      }
      if (paginate) {
        params['is_pagination'] = 1;
      }
    }
    return this.http.get(`${this.url}${this.endpoint}`, {
      params: params
    }).pipe(map((data: any) => this.serializer.fromJsonList(data) as ArticleModel[]));
  }

}
