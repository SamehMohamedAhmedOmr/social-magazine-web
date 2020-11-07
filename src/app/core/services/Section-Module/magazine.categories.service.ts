import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../../environments/environment';
import {MagazineCategoryModel} from '../../models/section-module/magazine.category.model';
import {MagazineCategorySerializer} from '../../Serializers/Section-Module/magazine.category.serializer';

@Injectable({
	providedIn: 'root'
})

export class MagazineCategoriesService extends BaseService<MagazineCategoryModel> {

	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'magazine-categories',
			new MagazineCategorySerializer());
	}

}
