import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {HomeModel} from '../../models/section-module/home.model';

export class HomeSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): HomeModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: HomeModel): any {
		return {};
	}

	toFormData(object: HomeModel): FormData {
		return null;
	}

	public adapt(item: any): HomeModel {
		let object = new HomeModel(null);

		object.latest_news = item.latest_news;
    object.testimonial = item.testimonial;
    object.magazine_information = item.magazine_information;
    object.visitors_count = item.visitors_count;
    object.most_download_article = item.most_download_article;
    object.most_viewed_article = item.most_viewed_article;
    object.archive = item.archive;

		return object;
	}


  status(status): any {
    return {};
  }

}
