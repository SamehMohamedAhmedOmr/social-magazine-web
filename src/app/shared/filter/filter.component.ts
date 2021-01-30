import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {IndexInterface} from '../Base-Interface/Index.Interface';
import {PaginateParams} from '../../core/models/paginateParams.interface';
import {GlobalConfig} from '../../core/global/global.config';
import {BaseService} from '../../core/services/Base/base.service';
import {ModelBase} from '../../core/models/Base/base.model';
import {AuthNoticeService} from '../../core/services/auth-notice.service';
import {HelperService} from '../../core/services/helper.service';
import {Base64DownloadHelperService} from '../../core/services/Helpers/base64.download.helper.service';


@Component({
	selector: 'kt-filter',
	templateUrl: './filter.component.html',
	styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit, OnDestroy {

	@Input() isLoadingResults = false;
	@Input() HasAdd = false;
	@Input() ButtonAddName = '';
	@Input() ButtonAddUrl = '';

	@Input() HasItemPerPage = false;

	@Input() HasActive = false;

	@Input() HasSearchFilter = false;
	@Input() SearchFilterTitle = '';

	@Input() ApiRoute = '';

	@Input() currentComponent:IndexInterface = null;

	search_filter = null;

	@Input() headerParams : PaginateParams = {
		active : 1,
		per_page: GlobalConfig.pagination_per_page ,
		search_key: null ,
		sort_key: null ,
		sort_order: null ,
		next_page_index: null
	};

	@Input() HasExport = false;

	@Input() currentService : BaseService<ModelBase> = null;


	constructor(private translateService: TranslateService,
				private authNoticeService: AuthNoticeService,
				private helper: HelperService) {
	}


	ngOnInit() {
	}

	// change records per page
	public perPageChange() {
		localStorage.setItem('pagination_per_page', this.headerParams.per_page);

		this.currentComponent.get(this.headerParams);
	}


	// Filter Datatable based on filter Input
	FilterDataTable() {
		setTimeout( () => {
			this.headerParams.search_key = this.search_filter;
			this.currentComponent.get(this.headerParams);
		}, 1000);
	}

	// toggle status from Active , InActive , All Status
	toggleStatus(number: number) {
		if(number == 1) { this.headerParams.active = '1';}
		else if (number == 0) { this.headerParams.active = '0';	}
		else { this.headerParams.active = null; }

		this.currentComponent.get(this.headerParams);
	}

	export() {
		this.currentService.exportExcelSheet(this.headerParams).subscribe(res => {
			if (res) {
				Base64DownloadHelperService.downloadFile(
					res.link,
					'Reports.xlsx');
			}
		}, handler => {
			this.authNoticeService.setNotice(this.helper.showingErrors(handler.error), 'danger');
		});
	}



	ngOnDestroy(): void {
		this.search_filter = null;
	}
}
