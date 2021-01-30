import {ModelBase} from '../Base/base.model';

export class MagazineCategoryModel extends ModelBase {

	public content:string;
	public images:[];

	constructor(id: number) {
		super(id);
	}

	public list() {
		return {
			'content' : this.content,
			'images' : this.images,
		};
	}


}
