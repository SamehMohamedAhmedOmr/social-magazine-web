import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {UsersModel} from '../../models/User-Module/users.model';


export class UsersSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): UsersModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: UsersModel): any {
		let user_object = {
			id : model.id,
			phone_number : model.phone_number,
			email : model.email,
			first_name : model.first_name,
			family_name : model.family_name,
			gender_id: model.gender.id,
			country_id : model.country.id,
			title_id: model.title.id,
		};

		if (model.password){
			user_object['password'] = model.password;
		}

		if (model.address){
			user_object['address'] = model.address;
		}

		if (model.alternative_email){
			user_object['alternative_email'] = model.alternative_email;
		}

		if (model.educational_level.id){
			user_object['educational_level_id'] = model.educational_level.id;
		}

		if (model.educational_degree.id){
			user_object['educational_degree_id'] = model.educational_degree.id;
		}

		if (model.educational_field){
			user_object['educational_field'] = model.educational_field;
		}

		if (model.university){
			user_object['university'] = model.university;
		}

		if (model.faculty){
			user_object['faculty'] = model.faculty;
		}

		if (model.fax_number){
			user_object['fax_number'] = model.fax_number;
		}

		if (model.account_type_id){
			user_object['account_type_id'] = model.account_type_id;
		}

		if (model.is_active){
			user_object['is_active'] = model.is_active;
		}


		return user_object;
	}

	toFormData(object: any): FormData {
		return null;
	}

	public adapt(item: any): UsersModel {
		let object =  new UsersModel(item.id);
		object.first_name = item.first_name;
		object.family_name = item.family_name;
		object.full_name = item.first_name + ' ' + item.family_name;
		object.email = item.email;
		object.alternative_email = item.alternative_email;
		object.is_active = item.is_active;
		object.gender = item.gender;
		object.title = item.title;
		object.educational_level = item.educational_level;
		object.educational_degree = item.educational_degree;
		object.country = item.country;
		object.types = item.types;
		object.educational_field = item.educational_field;
		object.university = item.university;
		object.faculty = item.faculty;
		object.phone_number = item.phone_number;
		object.fax_number = item.fax_number;
		object.address = item.address;

		return  object;
	}

	status(status): any {
		return {
			'is_active' : status,
		};
	}

	user_type(account_type_id): any {
		return {
			'account_type_id' : account_type_id,
		};
	}

}
