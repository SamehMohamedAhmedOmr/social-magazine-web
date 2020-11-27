import {ModelBase} from '../Base/base.model';
import {ArticleTypeModel} from './article.type.model';
import {AttachmentTypeModel} from './attachment.type.model';

export class ArticleDependenciesModel extends ModelBase {

	public article_types: ArticleTypeModel[];
  public attachment_types: AttachmentTypeModel[];

	constructor(id: number) {
		super(id);
	}

	public list() {
		return {

    };
	}


}
