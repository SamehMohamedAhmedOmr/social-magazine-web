import {ModelBase} from '../Base/base.model';

export class ArticleTypeModel extends ModelBase {

	public name:string;
  public key:string;

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
