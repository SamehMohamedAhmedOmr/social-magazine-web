import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {ArticleSuggestedJudgesModel} from '../../models/article-module/article.suggested.judges.model';


export class ArticleSuggestedJudgesSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): ArticleSuggestedJudgesModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: ArticleSuggestedJudgesModel): any {
		return  {};
	}

	toFormData(object: any): FormData {
		return null;
	}

	public adapt(item: any): ArticleSuggestedJudgesModel {
		let object =  new ArticleSuggestedJudgesModel(item.id);
		object.first_name = item.first_name;
		object.family_name = item.family_name;
		object.email = item.email;
		object.alternative_email = item.alternative_email;
		object.gender = item.gender;
		object.title = item.title;
		object.educational_level = item.educational_level;
		object.educational_degree = item.educational_degree;
		object.country = item.country;
		object.phone_number = item.phone_number;
		object.address = item.address;

		return  object;
	}

  status(status): any {
    return {};
  }

}
