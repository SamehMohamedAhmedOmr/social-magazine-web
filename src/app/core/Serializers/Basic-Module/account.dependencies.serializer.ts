import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {AccountDependenciesModel} from '../../models/Basic-Module/account.dependencies.model';

export class AccountDependenciesSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): AccountDependenciesModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: AccountDependenciesModel): any {
		return {};
	}

	toFormData(object: AccountDependenciesModel): FormData {
		return null;
	}

	public adapt(item: any): AccountDependenciesModel {
		let object = new AccountDependenciesModel(
			item.id
		);

		object.country = item.country;
		object.degrees = item.degrees;
    object.levels = item.levels;
    object.genders = item.genders;
    object.titles = item.titles;

		return object;
	}


	status(status): any {
		return {};
	}

}
