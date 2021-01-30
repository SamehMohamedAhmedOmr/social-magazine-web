import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'kt-no-record-found',
	templateUrl: './no-record-found.component.html',
	styleUrls: ['./no-record-found.component.scss']
})
export class NoRecordFoundComponent implements OnInit {

	@Input() resultsLength;
	constructor() {
	}

	ngOnInit() {
	}

}
