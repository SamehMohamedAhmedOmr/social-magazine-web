import {ModelBase} from '../Base/base.model';
import {ArticleTypeModel} from './article.type.model';
import {AttachmentTypeModel} from './attachment.type.model';
import {ArticleStatusListModel} from './article.status.list.model';

export class ArticleDependenciesModel extends ModelBase {

	public article_types: ArticleTypeModel[];
  public attachment_types: AttachmentTypeModel[];
  public article_status: ArticleStatusListModel[];

	constructor(id: number) {
		super(id);
	}

	public list() {
		return {

    };
	}


}
