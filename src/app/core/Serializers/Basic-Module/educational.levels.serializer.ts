import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {EducationalLevelModel} from '../../models/Basic-Module/educational.level.model';

export class EducationalLevelsSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): EducationalLevelModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: EducationalLevelModel): any {
		return {};
	}

	toFormData(object: EducationalLevelModel): FormData {
		return null;
	}

	public adapt(item: any): EducationalLevelModel {
		let object = new EducationalLevelModel(
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
