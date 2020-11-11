import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../../environments/environment';
import {MagazineNewsModel} from '../../models/section-module/magazine.news.model';
import {MagazineNewsSerializer} from '../../Serializers/Section-Module/magazine.news.serializer';

@Injectable({
	providedIn: 'root'
})

export class LatestMagazineNewsService extends BaseService<MagazineNewsModel> {

	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'latest-magazine-news',
			new MagazineNewsSerializer());
	}

}
