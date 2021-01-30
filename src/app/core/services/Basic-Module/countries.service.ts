import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {CountryModel} from '../../models/Basic-Module/country.model';
import {CountrySerializer} from '../../Serializers/Basic-Module/country.serializer';
import {environment} from '../../../../environments/environment';

@Injectable({
	providedIn: 'root'
})

export class CountriesService extends BaseService<CountryModel> {

	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'countries',
			new CountrySerializer());
	}

}
