import {ModelBase} from '../Base/base.model';

export class AuthModel extends ModelBase {

	public first_name:string;
  public family_name:string;
  public email:string;
  public password:string;

  public phone_number:string;
  public country_id:number;
  public gender_id:number;
  public title_id:number;


  public token:string;
	public expire_at:string;

	constructor(id: number) {
		super(id);
	}

	public list() {
		return {
		};
	}

}
