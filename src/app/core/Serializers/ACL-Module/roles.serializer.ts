import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {RolesModel} from '../../models/ACL-Module/roles.model';


export class RolesSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): RolesModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: RolesModel): any {
		return {
		};
	}

	toFormData(object: any): FormData {
		return null;
	}

	public adapt(item: any): RolesModel {
		return new RolesModel(
			item.id,
			item.name,
			item.permission,
			item.key
		);
	}

	status(status): any {
		return {
		};
	}

}
