import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {ArticleModel} from '../../models/article-module/article.model';


export class ArticleSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): ArticleModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: ArticleModel): any {
		return  {
      article_type_id: model.article_type.id,
      title_ar: model.title_ar,
      title_en: model.title_en,
    };
	}

  updateInfo(model: ArticleModel): any {
    let object =  {
      article_id: model.id,
      title_ar: model.title_ar,
      title_en: model.title_en,
    };


    if (model.content_ar){
      object['content_ar'] = model.content_ar;
    }

    if (model.content_en){
      object['content_en'] = model.content_en;
    }

    if (model.keywords_ar){
      object['keywords_ar'] = model.keywords_ar;
    }

    if (model.keywords_en){
      object['keywords_en'] = model.keywords_en;
    }

    return object;
  }

  confirm(model: ArticleModel): any {
    return  {};
  }

	toFormData(object: any): FormData {
		return null;
	}

	public adapt(item: any): ArticleModel {
		let object =  new ArticleModel(item.id);
		object.slug = item.slug;
		object.code = item.code;
		object.title_ar = item.title_ar;
		object.title_en = item.title_en;
		object.content_ar = item.content_ar;
		object.content_en = item.content_en;
		object.keywords_en = item.keywords_en;
		object.keywords_ar = item.keywords_ar;
		object.article_type = item.article_type;
		object.main_author = item.main_author;
		object.last_status = item.last_status;

    object.attachments = item.attachments;
    object.authors = item.authors;
    object.suggested_judges = item.suggested_judges;

		return  object;
	}

  status(status): any {
    return {};
  }

}
