import {Component, Input, OnInit} from '@angular/core';

@Component({
	selector: 'kt-soon',
	templateUrl: './soon.component.html',
	styleUrls: ['./soon.component.scss']
})
export class SoonComponent implements OnInit {

	@Input() title  = null;
	constructor() {
	}

	ngOnInit() {
	}

}
