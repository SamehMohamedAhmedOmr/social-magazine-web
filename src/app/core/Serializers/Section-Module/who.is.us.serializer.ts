import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {WhoIsUsModel} from '../../models/section-module/who.is.us.model';

export class WhoIsUsSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): WhoIsUsModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: WhoIsUsModel): any {
		return {
			id : model.id,
			content : model.content,
			is_active : model.is_active,
		};
	}

	toFormData(object: WhoIsUsModel): FormData {
		return null;
	}

	public adapt(item: any): WhoIsUsModel {
		let object = new WhoIsUsModel(
			item.id
		);

		object.content = item.content;
		object.is_active = item.is_active;

		return object;
	}


	status(status): any {
		return {
			'is_active' : status,
		};
	}

}
