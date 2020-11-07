import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {MagazineGoalsModel} from '../../models/section-module/magazine.goals.model';

export class MagazineGoalsSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): MagazineGoalsModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: MagazineGoalsModel): any {
		return {
			id : model.id,
			content : model.content,
			is_active : model.is_active,
		};
	}

	toFormData(object: MagazineGoalsModel): FormData {
		return null;
	}

	public adapt(item: any): MagazineGoalsModel {
		let object = new MagazineGoalsModel(
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
