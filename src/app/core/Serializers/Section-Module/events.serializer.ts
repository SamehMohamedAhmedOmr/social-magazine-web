import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {EventsModel} from '../../models/section-module/events.model';

export class EventsSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): EventsModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: EventsModel): any {
    return {};
	}

	toFormData(object: EventsModel): FormData {
		return null;
	}

	public adapt(item: any): EventsModel {
		let object = new EventsModel(
			item.id
		);

		object.title = item.title;
		object.content = item.content;

		object.images = item.images;

    object.slug = item.slug;
    object.created_at = item.date;

		return object;
	}


	status(status): any {
		return {
			'is_active' : status,
		};
	}

}
