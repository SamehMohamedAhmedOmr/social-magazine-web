import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../../environments/environment';
import {TitleModel} from '../../models/Basic-Module/title.model';
import {TitleSerializer} from '../../Serializers/Basic-Module/title.serializer';

@Injectable({
	providedIn: 'root'
})

export class TitlesService extends BaseService<TitleModel> {

	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'titles',
			new TitleSerializer());
	}

}
