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
		return {
			id : model.id,
			content : model.content,
			is_active : model.is_active,
		};
	}

	toFormData(object: PublicationRulesModel): FormData {
		return null;
	}

	public adapt(item: any): PublicationRulesModel {
		let object = new PublicationRulesModel(
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
