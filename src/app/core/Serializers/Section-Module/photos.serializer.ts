import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {PhotosModel} from '../../models/section-module/photos.model';

export class PhotosSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): PhotosModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: PhotosModel): any {
    return {};
	}

	toFormData(object: PhotosModel): FormData {
		return null;
	}

	public adapt(item: any): PhotosModel {
		let object = new PhotosModel(
			item.id
		);

		object.title = item.title;
		object.content = item.content;

		object.images = item.images;

		object.slug = item.slug;
    object.created_at = item.created_at;

		return object;
	}


	status(status): any {
		return {};
	}

}
