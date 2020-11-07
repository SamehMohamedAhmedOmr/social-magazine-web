import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {TrackersModel} from '../../models/section-module/trackers.model';

export class TrackersSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): TrackersModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: TrackersModel): any {
		return {};
	}

	toFormData(object: TrackersModel): FormData {
		return null;
	}

	public adapt(item: any): TrackersModel {
		let object = new TrackersModel(
			item.id
		);

		object.visitors = item.visitors;

		return object;
	}


	status(status): any {
		return {};
	}

}
