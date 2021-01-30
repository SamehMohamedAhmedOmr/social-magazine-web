import {ModelBase} from '../Base/base.model';

export class VideosModel extends ModelBase {

	public content:string;
	public title:string;
	public slug:string;
	public link:string;
	public created_at:string;

	constructor(id: number) {
		super(id);
	}

	public list() {
		return {
			'title' : this.title,
			'slug' : this.slug,
			'link' : this.link,
			'content' : this.content,
			'created_at' : this.created_at,
		};
	}


}
