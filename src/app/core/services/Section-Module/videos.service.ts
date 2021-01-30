import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../../environments/environment';
import {VideosModel} from '../../models/section-module/videos.model';
import {VideosSerializer} from '../../Serializers/Section-Module/videos.serializer';

@Injectable({
	providedIn: 'root'
})

export class VideosService extends BaseService<VideosModel> {

	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'videos',
			new VideosSerializer());
	}

}
