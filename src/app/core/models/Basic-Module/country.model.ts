import {ModelBase} from '../Base/base.model';

export class CountryModel extends ModelBase {

	public name:string;
	public image:string;
	public country_code:string;

	constructor(id: number) {
		super(id);
	}

	public list() {
		return {
			'id': this.id,
			'name' : this.name,
			'image' : this.image,
			'country_code' : this.country_code
		};
	}


}
