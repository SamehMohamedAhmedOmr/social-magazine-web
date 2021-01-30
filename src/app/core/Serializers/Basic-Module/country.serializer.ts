import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {CountryModel} from '../../models/Basic-Module/country.model';

export class CountrySerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): CountryModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: CountryModel): any {
		return {};
	}

	toFormData(object: CountryModel): FormData {
		return null;
	}

	public adapt(item: any): CountryModel {
		let object = new CountryModel(
			item.id
		);

		object.image = item.image;
		object.name = item.name;
		object.country_code = item.country_code;

		return object;
	}


	status(status): any {
		return {};
	}

}
