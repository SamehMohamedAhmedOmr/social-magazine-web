import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {AdvisoryBodyModel} from '../../models/section-module/advisory.body.model';

export class AdvisoryBodiesSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): AdvisoryBodyModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: AdvisoryBodyModel): any {
		return {};
	}

	toFormData(object: AdvisoryBodyModel): FormData {
		return null;
	}

	public adapt(item: any): AdvisoryBodyModel {
		let object = new AdvisoryBodyModel(null);

		object.name = item.name;
		object.job = item.job;

		return object;
	}


  status(status): any {
    return {};
  }

}
