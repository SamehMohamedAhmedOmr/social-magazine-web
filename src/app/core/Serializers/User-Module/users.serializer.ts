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
		return  {};
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
		object.phone_number = item.phone_number;
		object.address = item.address;

		return  object;
	}

  status(status): any {
    return {};
  }

	user_type(account_type_id): any {
		return {};
	}

}
