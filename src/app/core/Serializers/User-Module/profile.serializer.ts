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
			country_id : model.country_id,
			gender_id : model.gender_id,
			title_id : model.title_id,
			educational_level_id : model.educational_level_id,
			educational_degree_id : model.educational_degree_id,
			educational_field : model.educational_field,
			university : model.university,
			faculty : model.faculty,
			fax_number : model.fax_number,
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
		object.gender_id = item.gender_id;
		object.title_id = item.title_id;
		object.educational_level_id = item.educational_level_id;
		object.educational_degree_id = item.educational_degree_id;
		object.country_id = item.country_id;
		object.types = (item.types) ? item.types : [];
		object.educational_field = item.educational_field;
		object.university = item.university;
		object.faculty = item.faculty;
		object.phone_number = item.phone_number;
		object.fax_number = item.fax_number;
		object.address = item.address;


		return object;
	}


	status(status): any {
		return {};
	}

}
