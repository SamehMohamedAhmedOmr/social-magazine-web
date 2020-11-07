import {ModelBase} from '../Base/base.model';

export class TestimonialModel extends ModelBase {

	public content:string;
	public name:string;
	public stars:number;
	public image:any;
	public image_id:number;
	public is_active:boolean;

	constructor(id: number) {
		super(id);
	}

	public list() {
		return {
			'id': this.id,
			'name' : this.name,
			'stars' : this.stars,
			'content' : this.content,
			'image' : this.image,
			'is_active' : this.is_active,
		};
	}


}
