import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../../environments/environment';
import {PhotosModel} from '../../models/section-module/photos.model';
import {PhotosSerializer} from '../../Serializers/Section-Module/photos.serializer';

@Injectable({
	providedIn: 'root'
})

export class PhotosService extends BaseService<PhotosModel> {

	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'photos',
			new PhotosSerializer());
	}

}
