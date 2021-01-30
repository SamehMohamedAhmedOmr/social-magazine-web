import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../../environments/environment';
import {ForgetPasswordModel} from '../../models/User-Module/forget.password.model';
import {ForgetPasswordSerializer} from '../../Serializers/User-Module/forget.password.serializer';

@Injectable({
	providedIn: 'root'
})

export class ForgetPasswordService extends BaseService<ForgetPasswordModel> {

	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'passwords/forget',
			new ForgetPasswordSerializer());
	}

}
