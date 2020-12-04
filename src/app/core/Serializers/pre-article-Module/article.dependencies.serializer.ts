import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {ArticleDependenciesModel} from '../../models/pre-article-module/article.dependencies.model';

export class ArticleDependenciesSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): ArticleDependenciesModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: ArticleDependenciesModel): any {
		return {};
	}

	toFormData(object: ArticleDependenciesModel): FormData {
		return null;
	}

	public adapt(item: any): ArticleDependenciesModel {
		let object = new ArticleDependenciesModel(item.id);

		object.article_types = item.article_type;
    object.attachment_types = item.attachment_type;
    object.article_status = item.article_status;

		return object;
	}


  status(status): any {
    return {};
  }

}
