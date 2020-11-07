import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {PermissionsSerializer} from '../../Serializers/ACL-Module/permissions.serializer';

@Injectable({
	providedIn: 'root'
})

export class PermissionsService {

	private url = environment.url();
	private endpoint = 'admins/permissions';
	private serializer = new PermissionsSerializer();
	private http:HttpClient;

	constructor(http: HttpClient) {
		this.http = http;
	}

	public list(): Observable<[]> {
		return this.http.get (`${this.url}${this.endpoint}` )
			.pipe(map((data: any) => this.serializer.fromJsonList(data) as []));
	}

}
