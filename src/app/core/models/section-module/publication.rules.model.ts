import {ModelBase} from '../Base/base.model';

export class PublicationRulesModel extends ModelBase {

	public content:string;

	constructor(id: number) {
		super(id);
	}

	public list() {
		return {
			'content' : this.content,
		};
	}


}
