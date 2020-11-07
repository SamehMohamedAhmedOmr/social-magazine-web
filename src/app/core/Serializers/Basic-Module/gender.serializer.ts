import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {GenderModel} from '../../models/Basic-Module/gender.model';

export class GenderSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): GenderModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: GenderModel): any {
		return {};
	}

	toFormData(object: GenderModel): FormData {
		return null;
	}

	public adapt(item: any): GenderModel {
		let object = new GenderModel(
			item.id
		);

		object.name = item.name;
		object.key = item.key;

		return object;
	}


	status(status): any {
		return {};
	}

}
