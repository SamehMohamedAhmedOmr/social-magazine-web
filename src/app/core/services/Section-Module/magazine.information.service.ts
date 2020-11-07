import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../environments/environment';
import {MagazineInformationModel} from '../../models/section-module/magazine.information.model';
import {MagazineInformationSerializer} from '../../Serializers/Section-Module/magazine.information.serializer';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})

export class MagazineInformationService extends BaseService<MagazineInformationModel> {

	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'admins/magazine-information',
			new MagazineInformationSerializer());
	}

	public get(): Observable<MagazineInformationModel> {
		return this.http
			.get(`${this.url}${this.endpoint}`)
			.pipe(map((data: any) => this.serializer.fromJson(data) as MagazineInformationModel));
	}

}
