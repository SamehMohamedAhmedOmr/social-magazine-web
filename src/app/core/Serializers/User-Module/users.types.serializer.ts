import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {UsersTypesModel} from '../../models/User-Module/users.types.model';

export class UsersTypesSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): UsersTypesModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: UsersTypesModel): any {
		return {};
	}

	toFormData(object: UsersTypesModel): FormData {
		return null;
	}

	public adapt(item: any): UsersTypesModel {
		let object = new UsersTypesModel(
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
