import {ModelBase} from '../Base/base.model';
import {ArticleStatusModel} from './article.status.model';

export class ArticleStatusListModel extends ModelBase {

	public name:string;
  public key:string;
  public status: ArticleStatusModel[];

	constructor(id: number) {
		super(id);
	}

	public list() {
		return {
			'name' : this.name,
      'key' : this.key,
    };
	}


}
