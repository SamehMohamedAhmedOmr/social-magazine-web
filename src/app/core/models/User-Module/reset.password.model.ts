import {ModelBase} from '../Base/base.model';

export class ResetPasswordModel extends ModelBase {

	public old_password:string;
	public new_password:string;

	constructor(id: number) {
		super(id);
	}

	public list() {
		return {
			'id': this.id,
			'old_password' : this.old_password,
			'new_password' : this.new_password,
		};
	}


}
