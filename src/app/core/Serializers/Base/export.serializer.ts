import {ExportModel} from '../../models/Base/export.model';

export class ExportSerializer {

	public fromJson(json: any): ExportModel {
		let item = json.body;
		return new ExportModel(
			item.link
		);
	}

}

