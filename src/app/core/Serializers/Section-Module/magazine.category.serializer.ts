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
		let object =  {
			id : model.id,
			content : model.content,
			is_active : model.is_active,
		};

		if (model.images.length){
			object['images'] = model.images;
		}

		return object;
	}

	toFormData(object: MagazineCategoryModel): FormData {
		return null;
	}

	public adapt(item: any): MagazineCategoryModel {
		let object = new MagazineCategoryModel(
			item.id
		);

		object.content = item.content;
		object.images = item.images;

		object.is_active = item.is_active;

		return object;
	}


	status(status): any {
		return {
			'is_active' : status,
		};
	}

}
