import {ModelBase} from '../Base/base.model';
import {UsersModel} from '../User-Module/users.model';
import {AttachmentTypeModel} from '../pre-article-module/attachment.type.model';

export class ArticleAttachmentsModel extends ModelBase {

	public title:string;
  public description:string;
  public file:string;
  public article_id:number;
  public status_id:number;
  public upload_by:UsersModel;
  public attachment_type:AttachmentTypeModel;

	constructor(id: number) {
		super(id);
	}

	public list() {
		return {
			'title' : this.title,
      'description' : this.description,
      'file' : this.file,
      'article_id' : this.article_id,
      'status_id' : this.status_id,
      'upload_by' : this.upload_by,
      'attachment_type' : this.attachment_type,
    };
	}


}
