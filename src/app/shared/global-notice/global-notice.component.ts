// Angular
import {ChangeDetectorRef, Component, OnDestroy, OnInit, Output} from '@angular/core';
// RxJS
import {Subscription} from 'rxjs';
import {GlobalNoticeInterface} from '../../core/models/global-notice.interface';
import {GlobalNoticeService} from '../../core/services/global-notice.service';

// Auth


@Component({
	selector: 'kt-global-notice',
	templateUrl: './global-notice.component.html',
})
export class GlobalNoticeComponent implements OnInit, OnDestroy {
	@Output() type: any;
	@Output() message: any = '';

	// Private properties
	private subscriptions: Subscription[] = [];

	/**
	 * Component Constructive
	 *
	 * @param globalNoticeService
	 * @param cdr
	 */
	constructor(public globalNoticeService: GlobalNoticeService, private cdr: ChangeDetectorRef) {
	}

	/*
	 * @ Lifecycle sequences => https://angular.io/guide/lifecycle-hooks
    */

	/**
	 * On init
	 */
	ngOnInit() {
		this.subscriptions.push(this.globalNoticeService.globalNotice.subscribe(
			(notice: GlobalNoticeInterface) => {
				notice = Object.assign({}, {message: '', type: ''}, notice);
				this.message = notice.message;
				this.type = notice.type;
				this.cdr.markForCheck();
				if (this.type == 'success'){
					setTimeout(() => {
						this.message = null;
						this.cdr.markForCheck();
					}, 15000);
				}
			}
		));

	}

	/**
	 * On destroy
	 */
	ngOnDestroy(): void {
		this.subscriptions.forEach(sb => sb.unsubscribe());
	}
}
