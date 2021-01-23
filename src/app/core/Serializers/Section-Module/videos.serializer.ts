import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {VideosModel} from '../../models/section-module/videos.model';

export class VideosSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): VideosModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: VideosModel): any {
    return {};
	}

	toFormData(object: VideosModel): FormData {
		return null;
	}

	public adapt(item: any): VideosModel {
		let object = new VideosModel(
			item.id
		);

		object.title = item.title;
		object.content = item.content;

		object.link = item.link;

    object.slug = item.slug;
    object.created_at = item.created_at;

		return object;
	}


	status(status): any {
		return {
			'is_active' : status,
		};
	}

}
