import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../environments/environment';
import {UsersTypesModel} from '../../models/User-Module/users.types.model';
import {UsersTypesSerializer} from '../../Serializers/User-Module/users.types.serializer';

@Injectable({
	providedIn: 'root'
})

export class UsersTypesService extends BaseService<UsersTypesModel> {

	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'user-types',
			new UsersTypesSerializer());
	}

}
