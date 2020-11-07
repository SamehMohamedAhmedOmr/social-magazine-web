// Angular
import { Injectable } from '@angular/core';
// Tranlsation
import { TranslateService } from '@ngx-translate/core';
import { locale as enLang } from './../../../core/config/i18n/en';
import { locale as arLang } from './../../../core/config/i18n/ar';
export interface Locale {
	lang: string;
	// tslint:disable-next-line:ban-types
	data: Object;
}

@Injectable({
	providedIn: 'root'
})
export class TranslationService {
	// Private properties
	private langIds: any = [];

	/**
	 * Service Constructor
	 *
	 * @param translate: TranslateService
	 */
	constructor(private translate: TranslateService) {
		// add new langIds to the list
		this.loadTranslations(enLang ,arLang);
		this.translate.setDefaultLang('ar')
	}

	/**
	 * Load Translation
	 *
	 * @param args: Locale[]
	 */
	loadTranslations(...args: Locale[]): void {
		const locales = [...args];

		locales.forEach(locale => {
			// use setTranslation() with the third argument set to true
			// to append translations instead of replacing them
			this.translate.setTranslation(locale.lang, locale.data, true);

			this.langIds.push(locale.lang);
		});

		// add new languages to the list
		this.translate.addLangs(this.langIds);
		this.translate.use('ar');
	}

	/**
	 * Setup language
	 *
	 * @param lang: any
	 */
	setLanguage(lang) {
		if (lang) {
			this.translate.use(this.translate.getDefaultLang());
			this.translate.use(lang);
			localStorage.setItem('cms_lang', lang);
		}
	}

	/**
	 * Returns selected language
	 */
	getSelectedLanguage(): any {
		return localStorage.getItem('cms_lang') || this.translate.getDefaultLang();
	}
}
