import {ModelBase} from '../Base/base.model';

export class RolesModel extends ModelBase {

	public key: string;

	public name:string;

	public permissions:any;

	constructor(id: number,name:string, permissions:any, key:string) {

		super(id);

		this.name = name;

		this.key = key;
		this.permissions = permissions;
	}

	public list() {
		return {
			'id': this.id,

			'name' : this.name,
			'key': this.key,

			'permissions' : this.permissions
		};
	}
}
