import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {TitleModel} from '../../models/Basic-Module/title.model';

export class TitleSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): TitleModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: TitleModel): any {
		return {};
	}

	toFormData(object: TitleModel): FormData {
		return null;
	}

	public adapt(item: any): TitleModel {
		let object = new TitleModel(
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
