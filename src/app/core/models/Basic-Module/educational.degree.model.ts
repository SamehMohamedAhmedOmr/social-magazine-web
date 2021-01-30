import {ModelBase} from '../Base/base.model';

export class EducationalDegreeModel extends ModelBase {

	public name:string;
	public key:string;

	constructor(id: number) {
		super(id);
	}

	public list() {
		return {
			'id': this.id,
			'name' : this.name,
			'key' : this.key,
		};
	}


}
