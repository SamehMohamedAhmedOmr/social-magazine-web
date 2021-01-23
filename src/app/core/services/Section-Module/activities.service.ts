import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../../environments/environment';
import {ActivitiesSerializer} from '../../Serializers/Section-Module/activities.serializer';
import {ActivityModel} from '../../models/section-module/activity.model';

@Injectable({
	providedIn: 'root'
})

export class ActivitiesService extends BaseService<ActivityModel> {

	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'activities',
			new ActivitiesSerializer());
	}

}
