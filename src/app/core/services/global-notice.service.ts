import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {GlobalNoticeInterface} from '../models/global-notice.interface';

@Injectable({
	providedIn: 'root'
})
export class GlobalNoticeService {
	globalNotice: BehaviorSubject<GlobalNoticeInterface>;

	constructor() {
		this.globalNotice = new BehaviorSubject(null);
	}

	setNotice(message: string, type?: string) {
		const notice: GlobalNoticeInterface = {
			message: message,
			type: type
		};
		this.globalNotice.next(notice);
	}
}
