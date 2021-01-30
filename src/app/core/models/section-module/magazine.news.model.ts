import {ModelBase} from '../Base/base.model';

export class MagazineNewsModel extends ModelBase {

	public content:string;
	public title:string;
	public slug:string;
	public views:number;
	public images:[];
  public created_at:string;

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
      'created_at' : this.created_at
		};
	}


}
