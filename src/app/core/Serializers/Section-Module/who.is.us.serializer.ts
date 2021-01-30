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
		return {};
	}

	toFormData(object: WhoIsUsModel): FormData {
		return null;
	}

	public adapt(item: any): WhoIsUsModel {
		let object = new WhoIsUsModel(null);

		object.content = item.content;

		return object;
	}


  status(status): any {
    return {};
  }

}
