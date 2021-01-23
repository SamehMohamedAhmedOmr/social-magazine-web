import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../../environments/environment';
import {EventsModel} from '../../models/section-module/events.model';
import {EventsSerializer} from '../../Serializers/Section-Module/events.serializer';

@Injectable({
	providedIn: 'root'
})

export class EventsService extends BaseService<EventsModel> {

	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'admins/events',
			new EventsSerializer());
	}

}
