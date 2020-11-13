import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {AuthModel} from '../../models/User-Module/Auth.model';


export class AuthSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): AuthModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: AuthModel): any {
		let object =  {
			password: model.password,
			email: model.email,
		};
		if (model.first_name){
			object['first_name'] = model.first_name;
		}
		if (model.family_name){
			object['family_name'] = model.family_name;
		}

    if (model.phone_number){
      object['phone_number'] = model.phone_number;
    }

    if (model.country_id){
      object['country_id'] = model.country_id;
    }

    if (model.gender_id){
      object['gender_id'] = model.gender_id;
    }

    if (model.title_id){
      object['title_id'] = model.title_id;
    }
		return object;
	}

	toFormData(object: any): FormData {
		return null;
	}

	public adapt(item: any): AuthModel {
		let object =  new AuthModel(item.id);
		object.first_name = item.first_name;
    object.family_name = item.family_name;

    object.email = item.email;
    object.phone_number = item.phone;

    object.country_id = item.country_id;
    object.gender_id = item.gender_id;
    object.title_id = item.title_id;

    object.token = item.token;
		object.expire_at = item.expire_at;
		return  object;
	}

  status(status): any {
    return {};
  }
}
