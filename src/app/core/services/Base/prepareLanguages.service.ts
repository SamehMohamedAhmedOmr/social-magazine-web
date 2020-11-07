import {Injectable} from '@angular/core';

@Injectable({
	providedIn: 'root'
})

export class PrepareLanguagesService {

	public static prepareNames(languages, $title = 0){
		if (!languages || !languages.length){
			return [];
		}
		let lang = languages.find(k => k.lang == localStorage.getItem('cms_lang'));
		if (!lang){
			return ($title) ? languages[0].title : languages[0].name;
		}
		return ($title) ? lang.title :  lang.name;
	}


	public static prepareNoteBody(languages){
		if (!languages.length){
			return [];
		}
		let lang = languages.find(k => k.lang == localStorage.getItem('cms_lang'));
		if (!lang){
			return  languages[0].note_body;
		}
		return lang.note_body;
	}

	public static getName(item, languages, title = 0){
		return (item.name) ? item.name :  this.prepareNames(languages, title);
	}
}
