import {ModelBase} from '../Base/base.model';

export class MagazineInformationModel extends ModelBase {

	public title:string;
	public vision:string;
	public mission:string;
	public address:string;
	public phone:string;
	public fax_number:string;
	public email:string;
	public postal_code:string;
	public facebook:string;
	public magazine_link:string;
	public twitter:string;
	public instgram:string;
	public whatsapp:string;

	constructor(id: number) {
		super(id);
	}

	public list() {
		return {
			'title' : this.title,
			'vision' : this.vision,
			'mission' : this.mission,
			'address' : this.address,
			'phone' : this.phone,
			'fax_number' : this.fax_number,
			'email' : this.email,
			'postal_code' : this.postal_code,
		};
	}


}
