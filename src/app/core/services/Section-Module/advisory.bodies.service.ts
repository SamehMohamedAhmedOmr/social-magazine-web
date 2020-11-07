import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../environments/environment';
import {AdvisoryBodyModel} from '../../models/section-module/advisory.body.model';
import {AdvisoryBodiesSerializer} from '../../Serializers/Section-Module/advisory.bodies.serializer';

@Injectable({
	providedIn: 'root'
})

export class AdvisoryBodiesService extends BaseService<AdvisoryBodyModel> {

	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'admins/advisory-bodies',
			new AdvisoryBodiesSerializer());
	}

}
