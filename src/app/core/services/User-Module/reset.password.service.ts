import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../../environments/environment';
import {ResetPasswordModel} from '../../models/User-Module/reset.password.model';
import {ResetPasswordSerializer} from '../../Serializers/User-Module/reset.password.serializer';

@Injectable({
	providedIn: 'root'
})

export class ResetPasswordService extends BaseService<ResetPasswordModel> {

	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'admins/reset/password',
			new ResetPasswordSerializer());
	}

}
