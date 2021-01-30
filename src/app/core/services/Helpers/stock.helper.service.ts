import {Injectable} from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class StockHelperService {

	constructor() {
	}


	public determineLink(id, is_topping, path = null) {
		let main_path = (is_topping) ? 'toppings' : 'product';
		if (path) {
			return '/cms/' + main_path + '/' + id + '/stock/' + path;
		}
		return '/cms/' + main_path + '/' + id + '/stock';
	}

}
