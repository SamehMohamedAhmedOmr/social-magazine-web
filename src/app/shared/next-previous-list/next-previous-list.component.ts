import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
	selector: 'kt-next-previous-list',
	templateUrl: './next-previous-list.component.html',
	styleUrls: ['./next-previous-list.component.scss']
})
export class NextPreviousListComponent implements OnInit {

	@Input() current_page :number  = null;
	@Input() max_number_of_pages :number  = null;

	@Output() next_page = new EventEmitter<number>();

	constructor() {
	}

	ngOnInit() {
	}

	next(){
		let page = this.current_page;
		if (this.current_page < (this.max_number_of_pages - 1)){
			page = (this.current_page) ? this.current_page + 1 : 1;
		}

		this.next_page.emit(page);
	}

	previous(){
		let page = this.current_page;
		if (this.current_page){
			if (this.current_page > 0){
				page = this.current_page - 1;
			}
		}
		this.next_page.emit(page);
	}

	disabledNext(){
		return (this.current_page == (this.max_number_of_pages - 1)) || this.max_number_of_pages == 1;
	}

	disabledPrevious(){
		return !this.current_page;
	}

}
