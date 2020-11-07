import {ModelBase} from '../Base/base.model';

export class ProfileModel extends ModelBase {

	public first_name:string;
	public family_name:string;
	public email:string;
	public alternative_email:string;

	public gender_id:number;
	public title_id:number;
	public educational_level_id:number;
	public educational_degree_id:number;
	public country_id:number;

	public educational_field:string;
	public university:string;
	public faculty:string;
	public phone_number:string;
	public fax_number:string;
	public address:string;
	public types:{
		id: number,
		name: string,
		key: string
	}[];

	constructor(id: number) {
		super(id);
	}

	public list() {
		return {
			'id': this.id,
			'first_name' : this.first_name,
			'family_name' : this.family_name,
			'email' : this.email,
			'alternative_email' : this.alternative_email,

			'gender_id' : this.gender_id,
			'country_id' : this.country_id,
			'title_id' : this.title_id,
			'educational_level_id' : this.educational_level_id,
			'educational_degree_id' : this.educational_degree_id,

			'educational_field' : this.educational_field,
			'university' : this.university,
			'faculty' : this.faculty,
			'phone_number' : this.phone_number,
			'fax_number' : this.fax_number,
			'address' : this.address,
			'types' : this.types,
		};
	}


}
