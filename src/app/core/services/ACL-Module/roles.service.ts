import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../../environments/environment';
import {RolesModel} from '../../models/ACL-Module/roles.model';
import {RolesSerializer} from '../../Serializers/ACL-Module/roles.serializer';

@Injectable({
	providedIn: 'root'
})

export class RolesService extends BaseService<RolesModel> {
	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'admins/roles',
			new RolesSerializer());
	}

}
