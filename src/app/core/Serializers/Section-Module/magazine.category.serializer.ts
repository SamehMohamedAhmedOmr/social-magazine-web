import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {MagazineCategoryModel} from '../../models/section-module/magazine.category.model';

export class MagazineCategorySerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): MagazineCategoryModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: MagazineCategoryModel): any {
		return {};
	}

	toFormData(object: MagazineCategoryModel): FormData {
		return null;
	}

	public adapt(item: any): MagazineCategoryModel {
		let object = new MagazineCategoryModel(null);

		object.content = item.content;
		object.images = item.images;

		return object;
	}


	status(status): any {
		return {};
	}

}
