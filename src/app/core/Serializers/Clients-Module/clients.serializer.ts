import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {ClientsModel} from '../../models/Clients-Module/clients.model';

export class ClientsSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): ClientsModel {
		return this.adapt(json.data);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.data, json.meta);
	}

	toJson(model: ClientsModel): any {
		return {
			'app_name': model.name,
			'admin_email': model.admin_email,
			'admin_password': model.admin_password,
			'expiration_date' : model.expiration_date
		};
	}

	toJsonUpdate(model: ClientsModel): any {
		let object = {};

		if (model.image){
			object['image'] = model.image;
		}

		if (model.titles){
			object['title'] = model.titles;
		}

		if (model.descriptions){
			object['description'] = model.descriptions;
		}

		if (model.messages){
			object['message'] = model.messages;
		}

		if (model.expiration_date){
			object['expiration_date'] = model.expiration_date;
		}

		return object;
	}

	toFormData(object: ClientsModel): FormData {
		return null;
	}

	public adapt(item: any): ClientsModel {
		let project = new ClientsModel(
			item.id
		);

		project.image = item.image;
		project.name = item.name;
		project.slug = item.slug;
		project.expiration_date = item.expiration_date;

		project.title = item.title;
		project.description = item.description;
		project.message = item.message;
		project.payment_message = item.payment_message;
		project.is_active = item.active;

		project.port = item.port;

		project.sub_domain = item.sub_domain;
		project.success = item.success;

		project.job_status_id = item.job_status_id;
		project.api_url = item.api_url;
		project.cms_url = item.cms_url;
		project.admin_email = item.admin_email;

		return project;
	}


	status(status): any {
		return {
			'active' : status,
		};
	}

}
