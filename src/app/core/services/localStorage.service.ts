import { Injectable } from '@angular/core';


@Injectable({
	providedIn: 'root'
})
export class LocalStorageService {

	constructor() {
	}

	setWithExpiry(key, value, ttl) {
    const now = new Date();
    const item = {
      value: value,
      expiry: now.getTime() + ttl,
    };
    localStorage.setItem(key, JSON.stringify(item))
  }

  getWithExpiry(key) {
    const itemStr = localStorage.getItem(key);

    if (!itemStr) {
      return null;
    }
    const item = JSON.parse(itemStr);
    const now = new Date();
    if (now.getTime() > item.expiry) {
      localStorage.removeItem(key);
      return null
    }
    return item.value;
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
