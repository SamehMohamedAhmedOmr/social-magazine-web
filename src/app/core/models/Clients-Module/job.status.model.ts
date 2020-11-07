import {ModelBase} from '../Base/base.model';

export class JobStatusModel extends ModelBase {

	public job_id:number;
	public type:string;
	public queue:string;
	public attempts:string;
	public progress_now:number;
	public progress_max:number;
	public status:string;
	public progress_percentage:number;
	public input:[];
	public output:[];
	public project: {
		id:number,
		name:string,
	};



	constructor(id: number) {
		super(id);
	}

	public list() {
		return {
			'id': this.id,

			'job_id' : this.job_id,
			'type' : this.type,
			'queue' : this.queue,

			'attempts' : this.attempts,
			'progress_now' : this.progress_now,
			'progress_max' : this.progress_max,
			'status' : this.status,
			'progress_percentage': this.progress_percentage,

			'input' : this.input,
			'output' : this.output,

			'project' : this.project,

		};
	}
}
