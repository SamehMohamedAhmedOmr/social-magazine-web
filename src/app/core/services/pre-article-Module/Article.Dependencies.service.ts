import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ArticleDependenciesSerializer} from '../../Serializers/pre-article-Module/article.dependencies.serializer';
import {ArticleDependenciesModel} from '../../models/pre-article-module/article.dependencies.model';

@Injectable({
	providedIn: 'root'
})

export class ArticleDependenciesService {

  private http:HttpClient;
  private url:string;
  private endpoint:string;
  private serializer:ArticleDependenciesSerializer;

  private content_subject = new BehaviorSubject(null);
  public content = this.content_subject.asObservable();

  constructor(Http: HttpClient) {
    this.http = Http;
    this.url = environment.url();
    this.endpoint = 'article-dependencies';
    this.serializer = new ArticleDependenciesSerializer();
	}

	public get(): Observable<ArticleDependenciesModel> {
		return this.http
			.get(`${this.url}${this.endpoint}`)
			.pipe(map((data: any) => this.serializer.fromJson(data) as ArticleDependenciesModel));
	}

  articleContent(message: ArticleDependenciesModel) {
    this.content_subject.next(message)
  }


}
