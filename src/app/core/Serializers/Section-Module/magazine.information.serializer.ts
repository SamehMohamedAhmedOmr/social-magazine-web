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
		return {};
	}

	toFormData(object: MagazineInformationModel): FormData {
		return null;
	}

	public adapt(item: any): MagazineInformationModel {
		let object = new MagazineInformationModel(null);

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
    return {};
  }

}
