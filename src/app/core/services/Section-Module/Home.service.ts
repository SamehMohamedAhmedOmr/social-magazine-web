import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {HomeModel} from '../../models/section-module/home.model';
import {HomeSerializer} from '../../Serializers/Section-Module/home.serializer';

@Injectable({
	providedIn: 'root'
})

export class HomeService {

  private http:HttpClient;
  private url:string;
  private endpoint:string;
  private serializer:HomeSerializer;

  private home_content_subject = new BehaviorSubject(null);
  public content = this.home_content_subject.asObservable();

  constructor(Http: HttpClient) {
    this.http = Http;
    this.url = environment.url();
    this.endpoint = 'home';
    this.serializer = new HomeSerializer();
	}

	public get(): Observable<HomeModel> {
		return this.http
			.get(`${this.url}${this.endpoint}`)
			.pipe(map((data: any) => this.serializer.fromJson(data) as HomeModel));
	}

  homeContent(message: HomeModel) {
    this.home_content_subject.next(message)
  }


}
