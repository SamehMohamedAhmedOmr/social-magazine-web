import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../environments/environment';
import {GenderModel} from '../../models/Basic-Module/gender.model';
import {GenderSerializer} from '../../Serializers/Basic-Module/gender.serializer';

@Injectable({
	providedIn: 'root'
})

export class GendersService extends BaseService<GenderModel> {

	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'genders',
			new GenderSerializer());
	}

}
