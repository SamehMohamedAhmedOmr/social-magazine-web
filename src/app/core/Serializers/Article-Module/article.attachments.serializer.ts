import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {ArticleAuthorsModel} from '../../models/article-module/article.authors.model';
import {ArticleAttachmentsModel} from '../../models/article-module/article.attachments.model';


export class ArticleAttachmentsSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): ArticleAttachmentsModel {
		return this.adapt(json.body);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.body, json.pagination);
	}

	toJson(model: ArticleAttachmentsModel): any {
		return  {};
	}

	toFormData(object: any): FormData {
		return null;
	}

	public adapt(item: any): ArticleAttachmentsModel {
		let object =  new ArticleAttachmentsModel(item.id);
    object.title = item.title;
    object.description = item.description;
		object.file = item.file;
		object.article_id = item.article_id;
		object.status_id = item.status_id;
		object.upload_by = item.upload_by;
		object.attachment_type = item.attachment_type;
		return  object;
	}

  status(status): any {
    return {};
  }

}
