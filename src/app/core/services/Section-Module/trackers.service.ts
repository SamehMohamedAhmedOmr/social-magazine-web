import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../environments/environment';
import {TrackersModel} from '../../models/section-module/trackers.model';
import {TrackersSerializer} from '../../Serializers/Section-Module/trackers.serializer';

@Injectable({
	providedIn: 'root'
})

export class TrackersService extends BaseService<TrackersModel> {

	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'trackers',
			new TrackersSerializer());
	}

}
