import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {PublicationRulesModel} from '../../models/section-module/publication.rules.model';

export class PublicationRulesSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): PublicationRulesModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: PublicationRulesModel): any {
		return {};
	}

	toFormData(object: PublicationRulesModel): FormData {
		return null;
	}

	public adapt(item: any): PublicationRulesModel {
		let object = new PublicationRulesModel(null);

		object.content = item.content;

		return object;
	}


  status(status): any {
    return {};
  }

}
