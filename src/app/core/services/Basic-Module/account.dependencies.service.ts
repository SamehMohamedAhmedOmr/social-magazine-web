import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../../environments/environment';
import {AccountDependenciesModel} from '../../models/Basic-Module/account.dependencies.model';
import {AccountDependenciesSerializer} from '../../Serializers/Basic-Module/account.dependencies.serializer';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})

export class AccountDependenciesService {

  private http:HttpClient;
  private url:string;
  private endpoint:string;
  private serializer:AccountDependenciesSerializer;

  private dependency_content_subject = new BehaviorSubject(null);
  public dependency_content = this.dependency_content_subject.asObservable();

	constructor(Http: HttpClient) {

    this.http = Http;
    this.url = environment.url();
    this.endpoint = 'account-dependencies';
    this.serializer = new AccountDependenciesSerializer();
	}

  public get(): Observable<AccountDependenciesModel> {
    return this.http
      .get(`${this.url}${this.endpoint}`)
      .pipe(map((data: any) => this.serializer.fromJson(data) as AccountDependenciesModel));
  }

  accountContent(message: AccountDependenciesModel) {
    this.dependency_content_subject.next(message)
  }

}
