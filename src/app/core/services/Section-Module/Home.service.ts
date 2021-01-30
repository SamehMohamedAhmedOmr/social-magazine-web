import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HomeModel} from '../../models/section-module/home.model';
import {HomeSerializer} from '../../Serializers/Section-Module/home.serializer';
import {DependenciesModel} from '../../models/section-module/dependencies.model';
import {DependenciesSerializer} from '../../Serializers/Section-Module/dependencies.serializer';

@Injectable({
	providedIn: 'root'
})

export class HomeService {

  private http:HttpClient;
  private url:string;
  private endpoint:string;

  private home_content_subject = new BehaviorSubject(null);
  public content = this.home_content_subject.asObservable();

  private dependencies_content_subject = new BehaviorSubject(null);
  public dependencies_content = this.dependencies_content_subject.asObservable();

  constructor(Http: HttpClient) {
    this.http = Http;
    this.url = environment.url();
	}

	public get(): Observable<HomeModel> {
    this.endpoint = 'home';
    let serializer = new HomeSerializer();

    return this.http
			.get(`${this.url}${this.endpoint}`)
			.pipe(map((data: any) => serializer.fromJson(data) as HomeModel));
	}


  public getDependencies(): Observable<DependenciesModel> {
    this.endpoint = 'dependencies';
    let serializer = new DependenciesSerializer();

    return this.http
      .get(`${this.url}${this.endpoint}`)
      .pipe(map((data: any) => serializer.fromJson(data) as DependenciesModel));
  }

  homeContent(message: HomeModel) {
    this.home_content_subject.next(message)
  }


  dependenciesContent(message: DependenciesModel) {
    this.dependencies_content_subject.next(message)
  }

}
