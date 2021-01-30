import {ModelBase} from '../Base/base.model';

export class MagazineGoalsModel extends ModelBase {

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
