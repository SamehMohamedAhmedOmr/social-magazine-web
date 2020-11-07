import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../environments/environment';
import {WhoIsUsModel} from '../../models/section-module/who.is.us.model';
import {WhoIsUsSerializer} from '../../Serializers/Section-Module/who.is.us.serializer';

@Injectable({
	providedIn: 'root'
})

export class WhoIsUsService extends BaseService<WhoIsUsModel> {

	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'admins/who-is-us-sections',
			new WhoIsUsSerializer());
	}

}
