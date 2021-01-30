import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {PermissionsSerializer} from '../../Serializers/ACL-Module/permissions.serializer';
import {environment} from '../../../../environments/environment';

@Injectable({
	providedIn: 'root'
})

export class AccountPermissionsService {

	private endpoint:string;
	protected serializer:PermissionsSerializer;
	protected http:HttpClient;

	constructor(http: HttpClient) {
		this.http = http;
		this.endpoint = 'account/permissions';
		this.serializer = new PermissionsSerializer();
	}

	public list(): Observable<[]> {
		return this.http.get (`${environment.url()}${this.endpoint}` )
			.pipe(map((data: any) => this.serializer.fromJsonList(data) as []));
	}

	public preparePermissions(permissions){
		let storedPermissions: [] = [];

		permissions.forEach((permission)=>{
			// @ts-ignore
			storedPermissions.push(permission.key);
		});
		return storedPermissions;
	}

}
