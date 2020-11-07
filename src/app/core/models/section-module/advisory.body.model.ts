import {ModelBase} from '../Base/base.model';

export class AdvisoryBodyModel extends ModelBase {

	public name:string;
	public job:string;
	public is_active:boolean;

	constructor(id: number) {
		super(id);
	}

	public list() {
		return {
			'id': this.id,
			'name' : this.name,
			'job' : this.job,
			'is_active' : this.is_active,
		};
	}


}
