import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {PermissionsModel} from '../../models/ACL-Module/permissions.model';


export class PermissionsSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): PermissionsModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: PermissionsModel): any {
		return {};
	}

	toFormData(object: any): FormData {
		return null;
	}

	public adapt(item: any): PermissionsModel {
		return new PermissionsModel(
			item.id,
			item.name,
			item.key
		);
	}

	status(status): any {

		return {
		};
	}

}
