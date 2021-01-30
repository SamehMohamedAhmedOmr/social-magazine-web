import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'kt-api-loader',
	templateUrl: './api-loader.component.html',
	styleUrls: ['./api-loader.component.scss']
})
export class ApiLoaderComponent implements OnInit {

	@Input() isLoadingResults = false;

	constructor() {
	}

	ngOnInit() {
	}

}
