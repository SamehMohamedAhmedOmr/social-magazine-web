
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../../Base/base.service';
import {GalleryModel} from '../../../models/Gallery-Module/Gallery/gallery.model';
import {GallerySerializer} from '../../../Serializers/Gallery-Module/Gallery/gallery.serializer';
import {environment} from '../../../../../environments/environment';


@Injectable({
	providedIn: 'root'
})

export class GalleryService extends BaseService<GalleryModel> {
	constructor(Http:HttpClient) {
		super(
			Http,
			environment.url(),
			'admins/gallery',
			new GallerySerializer());
	}

	public prepareObject(image, galley_type){
		return {
			'image' : image,
			'gallery_type' : galley_type
		}
	}

}
