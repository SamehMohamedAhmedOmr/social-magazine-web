import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../environments/environment';
import {MagazineGoalsModel} from '../../models/section-module/magazine.goals.model';
import {MagazineGoalsSerializer} from '../../Serializers/Section-Module/magazine.goals.serializer';

@Injectable({
	providedIn: 'root'
})

export class MagazineGoalsService extends BaseService<MagazineGoalsModel> {

	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'admins/magazine-goals',
			new MagazineGoalsSerializer());
	}

}
