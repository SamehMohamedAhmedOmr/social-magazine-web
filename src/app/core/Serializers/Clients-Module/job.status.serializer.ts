import {BaseSerializer} from '../Base/Base.serializer';
import {Serializer} from '../Base/Serializer';
import {JobStatusModel} from '../../models/Clients-Module/job.status.model';

export class JobStatusSerializer extends BaseSerializer implements Serializer {

	fromJson(json: any): JobStatusModel {
		return this.adapt(json.data);
	}

	fromJsonList(json: any): [] {
		return this.adaptList(json.data, json.meta);
	}

	toJson(model: JobStatusModel): any {
		return {};
	}

	toFormData(object: any): FormData {
		return null;
	}

	public adapt(item: any): JobStatusModel {
		let jobStatusModel = new JobStatusModel(
			item.id
		);

		jobStatusModel.job_id = item.job_id;
		jobStatusModel.type = item.type;
		jobStatusModel.queue = item.queue;
		jobStatusModel.attempts = item.attempts;
		jobStatusModel.progress_now = item.progress_now;
		jobStatusModel.progress_max = item.progress_max;
		jobStatusModel.status = item.status;
		jobStatusModel.progress_percentage = item.progress_percentage;
		jobStatusModel.input = item.input;
		jobStatusModel.output = item.output;
		jobStatusModel.project = item.project;

		return jobStatusModel;
	}


	status(status): any {
		return {};
	}

}
