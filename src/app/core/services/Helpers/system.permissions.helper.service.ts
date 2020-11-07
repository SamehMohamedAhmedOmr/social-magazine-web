import {Injectable} from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class SystemPermissionsHelperService {

	public checkPermissions(permissions){

		let stored_permissions = JSON.parse(localStorage.getItem('permissions'));

		let has_permission = true;

		// TODO :: TEMP DISABLE
		// permissions.forEach((permission)=>{
		// 	let check = stored_permissions.includes(permission);
		// 	if (!check){
		// 		has_permission = false;
		// 	}
		// });
		//
		// if (!permissions.length){
		// 	has_permission = false;
		// }

		return has_permission;
	}

}
