import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {ForgetPasswordModel} from '../../models/User-Module/forget.password.model';

export class ForgetPasswordSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): ForgetPasswordModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: ForgetPasswordModel): any {
		return {
			email : model.email,
			token : model.token,
			password : model.password,
			password_confirmation : model.password_confirmation,
		};
	}

	toFormData(object: ForgetPasswordModel): FormData {
		return null;
	}

	public adapt(item: any): ForgetPasswordModel {
		let object = new ForgetPasswordModel(
			item.id
		);


		return object;
	}


	status(status): any {
		return {};
	}

}
