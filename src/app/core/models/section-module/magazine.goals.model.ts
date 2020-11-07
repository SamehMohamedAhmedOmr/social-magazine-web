import {ModelBase} from '../Base/base.model';

export class MagazineGoalsModel extends ModelBase {

	public content:string;
	public is_active:boolean;

	constructor(id: number) {
		super(id);
	}

	public list() {
		return {
			'id': this.id,
			'content' : this.content,
			'is_active' : this.is_active,
		};
	}


}
