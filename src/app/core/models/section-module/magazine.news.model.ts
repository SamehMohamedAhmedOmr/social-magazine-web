import {ModelBase} from '../Base/base.model';

export class MagazineNewsModel extends ModelBase {

	public content:string;
	public title:string;
	public slug:string;
	public views:number;
	public images:[];

	constructor(id: number) {
		super(id);
	}

	public list() {
		return {
			'title' : this.title,
			'slug' : this.slug,
			'views' : this.views,
			'content' : this.content,
			'images' : this.images,
		};
	}


}
