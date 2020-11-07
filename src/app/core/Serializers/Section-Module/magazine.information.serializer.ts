import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {MagazineInformationModel} from '../../models/section-module/magazine.information.model';

export class MagazineInformationSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): MagazineInformationModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: MagazineInformationModel): any {
		return {
			id : model.id,
			vision : model.vision,
			mission : model.mission,
			address : model.address,
			phone : model.phone,
			fax_number : model.fax_number,
			email : model.email,
			postal_code : model.postal_code,

		};
	}

	toFormData(object: MagazineInformationModel): FormData {
		return null;
	}

	public adapt(item: any): MagazineInformationModel {
		let object = new MagazineInformationModel(
			item.id
		);

		object.title = item.title;
		object.vision = item.vision;
		object.mission = item.mission;
		object.address = item.address;
		object.phone = item.phone;
		object.fax_number = item.fax_number;
		object.postal_code = item.postal_code;
		object.email = item.email;

		return object;
	}


	status(status): any {
		return {
			'is_active' : status,
		};
	}

}
