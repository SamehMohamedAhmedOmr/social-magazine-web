import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../../environments/environment';
import {EducationalDegreeModel} from '../../models/Basic-Module/educational.degree.model';
import {EducationalDegreeSerializer} from '../../Serializers/Basic-Module/educational.degree.serializer';

@Injectable({
	providedIn: 'root'
})

export class EducationalDegreesService extends BaseService<EducationalDegreeModel> {

	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'educational-degrees',
			new EducationalDegreeSerializer());
	}

}
