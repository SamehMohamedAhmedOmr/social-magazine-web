import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {ProfileModel} from '../../models/User-Module/profile.model';
import {ProfileSerializer} from '../../Serializers/User-Module/profile.serializer';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})

export class ProfileService {

	private http: HttpClient;
	private url:string;
	private endpoint:string;
	private serializer:ProfileSerializer;

	constructor(Http: HttpClient) {
		this.http = Http;
		this.url = environment.url();
		this.endpoint = 'admins/profile';
		this.serializer = new ProfileSerializer();
	}

	public get(): Observable<ProfileModel> {
		return this.http
			.get(`${this.url}${this.endpoint}`)
			.pipe(map((data: any) => this.serializer.fromJson(data) as ProfileModel));
	}

	public update(item: ProfileModel): Observable<ProfileModel> {
		return this.http
			.put<ProfileModel>(`${this.url}${this.endpoint}`,
				this.serializer.toJson(item))
			.pipe(map(data => this.serializer.fromJson(data) as ProfileModel));
	}

}
