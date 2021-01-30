import {ModelBase} from '../Base/base.model';

export class ForgetPasswordModel extends ModelBase {

	public email:string;
	public token:string;
	public password:string;
	public password_confirmation:string;

	constructor(id: number) {
		super(id);
	}

	public list() {
		return {
			'id': this.id,
			'email' : this.email,
			'token' : this.token,
			'password' : this.password,
			'password_confirmation' : this.password_confirmation,

		};
	}


}
