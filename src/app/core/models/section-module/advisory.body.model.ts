import {ModelBase} from '../Base/base.model';

export class AdvisoryBodyModel extends ModelBase {

	public name:string;
	public job:string;

	constructor(id: number) {
		super(id);
	}

	public list() {
		return {
			'name' : this.name,
			'job' : this.job,
		};
	}


}
