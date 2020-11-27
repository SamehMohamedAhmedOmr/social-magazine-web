import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {ProfileModel} from '../../models/User-Module/profile.model';

export class ProfileSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): ProfileModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: ProfileModel): any {
		return {
			first_name : model.first_name,
			family_name : model.family_name,
			email : model.email,
			alternative_email : model.alternative_email,
			phone_number : model.phone_number,
			country_id : model.country.id,
			gender_id : model.gender.id,
			title_id : model.title.id,
			educational_level_id : model.educational_level.id,
			educational_degree_id : model.educational_degree.id,
			address : model.address,
		};
	}

	toFormData(object: ProfileModel): FormData {
		return null;
	}

	public adapt(item: any): ProfileModel {
		let object = new ProfileModel(
			item.id
		);

		object.first_name = item.first_name;
		object.family_name = item.family_name;
		object.email = item.email;
		object.alternative_email = item.alternative_email;
		object.gender = item.gender;
		object.title = item.title;
		object.educational_level = item.educational_level;
		object.educational_degree = item.educational_degree;
		object.country = item.country;
		object.types = (item.types) ? item.types : [];
		object.phone_number = item.phone_number;
		object.address = item.address;


		return object;
	}



	status(status): any {
		return {};
	}

}
