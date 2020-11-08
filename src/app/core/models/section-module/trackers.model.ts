import {ModelBase} from '../Base/base.model';

export class TrackersModel extends ModelBase {

	public visitors:number;

	constructor(id: number) {
		super(id);
	}

	public list() {
		return {
			'visitors' : this.visitors,
		};
	}


}
