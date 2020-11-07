import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {BaseService} from '../Base/base.service';
import {environment} from '../../../../environments/environment';
import {TestimonialModel} from '../../models/section-module/testimonial.model';
import {TestimonialSerializer} from '../../Serializers/Section-Module/testimonial.serializer';

@Injectable({
	providedIn: 'root'
})

export class TestimonialService extends BaseService<TestimonialModel> {

	constructor(Http: HttpClient) {
		super(
			Http,
			environment.url(),
			'admins/testimonials',
			new TestimonialSerializer());
	}

}
