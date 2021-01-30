import {ModelBase} from '../Base/base.model';

export class ArticleStatusModel extends ModelBase {

	public name:string;
  public key:string;
  public description:string;

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
