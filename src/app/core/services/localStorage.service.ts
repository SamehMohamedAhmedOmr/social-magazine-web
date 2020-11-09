import { Injectable } from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class LocalStorageService {

	constructor() {
	}

  getLang(){
	  return localStorage.getItem('lang');
  }

  getToken(){
    return localStorage.getItem('token');
  }


}
