import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {MagazineNewsModel} from '../../models/section-module/magazine.news.model';

export class MagazineNewsSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): MagazineNewsModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: MagazineNewsModel): any {
		return {};
	}

	toFormData(object: MagazineNewsModel): FormData {
		return null;
	}

	public adapt(item: any): MagazineNewsModel {
		let object = new MagazineNewsModel(null);

		object.title = item.title;
		object.content = item.content;

		object.images = item.images;


		return object;
	}


  status(status): any {
    return {};
  }

}
