import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../../environments/environment';
import {PaginateParams} from '../../models/paginateParams.interface';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ArticleSuggestedJudgesSerializer} from '../../Serializers/Article-Module/article.suggested.judges.serializer';
import {ArticleSuggestedJudgesModel} from '../../models/article-module/article.suggested.judges.model';

@Injectable({
	providedIn: 'root'
})

export class ArticleSuggestedJudgesService extends BaseService<ArticleSuggestedJudgesModel> {

	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'article-judges',
			new ArticleSuggestedJudgesSerializer());
	}


}
