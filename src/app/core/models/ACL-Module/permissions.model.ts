import {ModelBase} from '../Base/base.model';

export class PermissionsModel extends ModelBase {

	public key: string;
	public name:string;


	constructor(id: number, name: string,
				key: string) {

		super(id);
		this.key = key;
		this.name = name;

	}

	public list() {
		return {
			'id': this.id,
			'key' : this.key,
			'name' : this.name,
		};
	}
}
