import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {ResetPasswordModel} from '../../models/User-Module/reset.password.model';

export class ResetPasswordSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): ResetPasswordModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: ResetPasswordModel): any {
		return {
			old_password : model.old_password,
			new_password : model.new_password,
		};
	}

	toFormData(object: ResetPasswordModel): FormData {
		return null;
	}

	public adapt(item: any): ResetPasswordModel {
		let object = new ResetPasswordModel(
			item.id
		);


		return object;
	}


	status(status): any {
		return {};
	}

}
