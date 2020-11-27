import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../../environments/environment';
import {PaginateParams} from '../../models/paginateParams.interface';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ArticleAttachmentsModel} from '../../models/article-module/article.attachments.model';
import {ArticleAttachmentsSerializer} from '../../Serializers/Article-Module/article.attachments.serializer';

@Injectable({
	providedIn: 'root'
})

export class ArticleAttachmentsService extends BaseService<ArticleAttachmentsModel> {

	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'article-attachments',
			new ArticleAttachmentsSerializer());
	}


}
