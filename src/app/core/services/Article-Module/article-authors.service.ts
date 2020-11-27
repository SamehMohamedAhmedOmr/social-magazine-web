import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../../environments/environment';
import {PaginateParams} from '../../models/paginateParams.interface';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ArticleAuthorsModel} from '../../models/article-module/article.authors.model';
import {ArticleAuthorsSerializer} from '../../Serializers/Article-Module/article.authors.serializer';

@Injectable({
	providedIn: 'root'
})

export class ArticleAuthorsService extends BaseService<ArticleAuthorsModel> {

	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'article-authors',
			new ArticleAuthorsSerializer());
	}


}
