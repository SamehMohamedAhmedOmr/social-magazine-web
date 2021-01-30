import {ModelBase} from '../Base/base.model';

export class PhotosModel extends ModelBase {

	public content:string;
	public title:string;
	public slug:string;
	public images:[];
  public created_at:string;

	constructor(id: number) {
		super(id);
	}

	public list() {
		return {
			'title' : this.title,
			'slug' : this.slug,
			'content' : this.content,
			'images' : this.images,
      'created_at' : this.created_at
		};
	}


}
