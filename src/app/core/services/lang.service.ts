import {Inject, Injectable} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {TranslationService} from "../_base/layout";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class LangService {
  constructor(@Inject(DOCUMENT) private document: Document,private trlanslation: TranslationService) {
  }
	loadStyle() {
		let lang = localStorage.getItem('cms_lang');
		let styleName = '';
		if(lang == 'en') {
			this.document.dir ='ltr';
			this.document.documentElement.lang ='en';
			this.document.documentElement.style.direction ='ltr';
			styleName = "assets/css_languages/style.angular.css";
			this.trlanslation.setLanguage('en');
		} else {
			this.document.dir ='rtl';
			this.document.documentElement.lang ='ar';
			this.document.documentElement.style.direction ='rtl';
			styleName = "assets/css_languages/style.angular.rtl.css";
			this.trlanslation.setLanguage('ar');
		}
		const head = this.document.getElementsByTagName('head')[0];

		let themeLink = this.document.getElementById(
			'client-theme'
		) as HTMLLinkElement;
		if (themeLink) {
			themeLink.href = styleName;
		} else {
			const style = this.document.createElement('link');
			style.id = 'client-theme';
			style.rel = 'stylesheet';
			style.href = `${styleName}`;
			head.appendChild(style);
		}
	}
}
