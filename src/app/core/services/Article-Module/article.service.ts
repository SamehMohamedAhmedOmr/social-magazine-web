import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../../environments/environment';
import {PaginateParams} from '../../models/paginateParams.interface';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ArticleModel} from '../../models/article-module/article.model';
import {ArticleSerializer} from '../../Serializers/Article-Module/article.serializer';

@Injectable({
	providedIn: 'root'
})

export class ArticleService extends BaseService<ArticleModel> {

	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'manage-articles',
			new ArticleSerializer());
	}


}
