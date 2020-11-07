import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {TestimonialModel} from '../../models/section-module/testimonial.model';

export class TestimonialSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): TestimonialModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: TestimonialModel): any {
		return {};
	}

	toFormData(object: TestimonialModel): FormData {
		return null;
	}

	public adapt(item: any): TestimonialModel {
		let object = new TestimonialModel(
			item.id
		);

		object.name = item.name;
		object.content = item.content;

		object.image = item.image;
		object.image_id = item.image_id;
		object.stars = item.stars;

		object.is_active = item.is_active;

		return object;
	}


  status(status): any {
    return {};
  }

}
