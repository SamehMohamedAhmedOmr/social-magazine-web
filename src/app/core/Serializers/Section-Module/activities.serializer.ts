import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {ActivityModel} from '../../models/section-module/activity.model';

export class ActivitiesSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): ActivityModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: ActivityModel): any {
    return {};
	}

	toFormData(object: ActivityModel): FormData {
		return null;
	}

	public adapt(item: any): ActivityModel {
		let object = new ActivityModel(
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
		return {
			'is_active' : status,
		};
	}

}
