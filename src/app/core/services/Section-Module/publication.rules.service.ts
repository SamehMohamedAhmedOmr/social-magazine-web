import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../../environments/environment';
import {PublicationRulesModel} from '../../models/section-module/publication.rules.model';
import {PublicationRulesSerializer} from '../../Serializers/Section-Module/publication.rules.serializer';

@Injectable({
	providedIn: 'root'
})

export class PublicationRulesService extends BaseService<PublicationRulesModel> {

	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'admins/publication-rules',
			new PublicationRulesSerializer());
	}

}
