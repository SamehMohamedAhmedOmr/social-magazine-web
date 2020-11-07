import {ModelBase} from '../Base/base.model';

export class MagazineCategoryModel extends ModelBase {

	public content:string;
	public images:[];
	public is_active:boolean;

	constructor(id: number) {
		super(id);
	}

	public list() {
		return {
			'id': this.id,
			'content' : this.content,
			'images' : this.images,
			'is_active' : this.is_active,
		};
	}


}
