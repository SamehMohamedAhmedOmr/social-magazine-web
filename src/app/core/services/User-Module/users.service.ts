import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../../environments/environment';
import {UsersModel} from '../../models/User-Module/users.model';
import {UsersSerializer} from '../../Serializers/User-Module/users.serializer';
import {PaginateParams} from '../../models/paginateParams.interface';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})

export class UsersService extends BaseService<UsersModel> {

	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'admins/users',
			new UsersSerializer());
	}

	public list(paginationParams : PaginateParams, account_type_id, paginate =1): Observable<[]> {
		let params = {};
		if (paginationParams) {
			if(paginationParams.search_key) { params['search_key'] = paginationParams.search_key; }
			if(paginationParams.active) { params['is_active'] = paginationParams.active; }
			if(paginationParams.per_page) { params['per_page'] = paginationParams.per_page; }
			if(paginationParams.sort_order) { params['sort_order'] = paginationParams.sort_order; }
			if(paginationParams.next_page_index) { params['page'] = paginationParams.next_page_index + 1; }
			if (paginate) {params['is_pagination'] = 1;}
			params['account_type_id'] = account_type_id;
		}
		return this.http.get (`${this.url}${this.endpoint}` , {
			params: params
		}).pipe(map((data: any) => this.serializer.fromJsonList(data) as []));
	}

	public changeUserType(id:number, status): Observable<UsersModel> {
		let serializer = new UsersSerializer();
		return this.http
			.put<UsersModel>(`${this.url}${this.endpoint}/${id}`,
				serializer.user_type(status))
			.pipe(map(data => this.serializer.fromJson(data) as UsersModel));
	}

}
