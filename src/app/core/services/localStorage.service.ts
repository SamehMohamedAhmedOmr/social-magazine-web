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


  getName(){
    return localStorage.getItem('first_name');
  }

  setItem(key, value){
    localStorage.setItem(key, value);
  }

}
