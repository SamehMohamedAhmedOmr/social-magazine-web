import {ModelBase} from '../Base/base.model';

export class ClientsModel extends ModelBase {

	public image:string;
	public name:string;
	public slug:string;

	public expiration_date:string;

	public title:string;
	public description:string;
	public message:string;
	public payment_message:string;
	public is_active:boolean;

	public port:string;

	public sub_domain:string;
	public success:string;
	public job_status_id:number;
	public api_url:string;
	public cms_url:string;
	public admin_email:string;
	public admin_password:string;

	public titles: [];
	public descriptions: [];
	public messages: [];

	constructor(id: number) {
		super(id);
	}

	public list() {
		return {
			'id': this.id,

			'name' : this.name,
			'slug' : this.slug,
			'image' : this.image,

			'title' : this.title,
			'description' : this.description,
			'message' : this.message,
			'payment_message' : this.payment_message,
			'is_active': this.is_active,

			'port' : this.port,

			'sub_domain' : this.sub_domain,
			'success' : this.success,
			'job_status_id' : this.job_status_id,
			'api_url' : this.api_url,
			'cms_url' : this.cms_url,
			'expiration_date' : this.expiration_date,
			'admin_email' : this.admin_email,
		};
	}


}
