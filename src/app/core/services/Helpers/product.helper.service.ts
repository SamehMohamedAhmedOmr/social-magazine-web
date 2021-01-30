import {Injectable} from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class ProductHelperService {

	constructor() {
	}


	public static prepareNewWarehouseObject(SelectedWarehouses) {
		let selectedWarehouses_array :[] = [];

		SelectedWarehouses.forEach((value, index) => {
			let product_warehouse = {
				// @ts-ignore
				id : value.id,
				available : true,
				qty:0,
			};
			// @ts-ignore
			selectedWarehouses_array.push(product_warehouse);
		});
		return selectedWarehouses_array;
	}

	public static prepareSingleWarehouseObject(warehouse, available){
		return  {
			// @ts-ignore
			id : warehouse.id,
			available : available,
			qty:warehouse.quantity,
		};
	}

}
