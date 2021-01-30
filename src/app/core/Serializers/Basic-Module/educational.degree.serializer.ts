import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {EducationalDegreeModel} from '../../models/Basic-Module/educational.degree.model';

export class EducationalDegreeSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): EducationalDegreeModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: EducationalDegreeModel): any {
		return {};
	}

	toFormData(object: EducationalDegreeModel): FormData {
		return null;
	}

	public adapt(item: any): EducationalDegreeModel {
		let object = new EducationalDegreeModel(
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
