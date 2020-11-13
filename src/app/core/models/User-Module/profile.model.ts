import {ModelBase} from '../Base/base.model';

export class ProfileModel extends ModelBase {

	public first_name:string;
	public family_name:string;
	public email:string;
	public alternative_email:string;

  public gender:{
    id: number,
    name: string,
    key: string
  };

  public title:{
    id: number,
    name: string,
    key: string
  };

  public educational_level:{
    id: number,
    name: string,
    key: string
  };

  public educational_degree:{
    id: number,
    name: string,
    key: string
  };

  public country:{
    id: number,
    name: string,
    image: string,
    country_code: string
  };

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

			'educational_field' : this.educational_field,
			'university' : this.university,
			'faculty' : this.faculty,
			'phone_number' : this.phone_number,
			'fax_number' : this.fax_number,
			'address' : this.address,
			'types' : this.types,
		};
	}

  public initialLists(){
    this.educational_degree = {
      id: null,
      name: null,
      key: null
    };
    this.educational_level = {
      id: null,
      name: null,
      key: null
    };

    this.title = {
      id: null,
      name: null,
      key: null
    };

    this.gender = {
      id: null,
      name: null,
      key: null
    };

    this.country = {
      id: null,
      name: null,
      image: null,
      country_code: null
    };
  }


}
