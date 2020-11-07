import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../environments/environment';
import {EducationalLevelModel} from '../../models/Basic-Module/educational.level.model';
import {EducationalLevelsSerializer} from '../../Serializers/Basic-Module/educational.levels.serializer';

@Injectable({
	providedIn: 'root'
})

export class EducationalLevelsService extends BaseService<EducationalLevelModel> {

	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'educational-levels',
			new EducationalLevelsSerializer());
	}

}
