import {Injectable} from '@angular/core';
import {errors} from '../models/errors.interface';
import {NavigationEnd} from '@angular/router';

@Injectable({
	providedIn: 'root'
})
export class HelperService {

	constructor() {
	}

	showingErrors(handler: errors) {
		let messages = [];
		for (let errors in handler.errors) {
			for (let error of handler.errors[errors]) {
				messages.push(error);
			}
		}
		return messages.join('<br>');
	}

	public prepareNames(languages, iso, is_name = 1) {
		let target_language = languages.find(language => language.lang == iso);
		let name = '';
		if (!target_language) {
			target_language = languages.find(language => language.lang == 'en');
		}

		if (is_name) {
			name = target_language.name;
		} else {
			name = target_language.title;
		}

		return name;
	}

	public routingSubscribe(component) {
		return component.router.events.subscribe((e: any) => {
			if (e instanceof NavigationEnd) {
				component.initialiseComponent();
			}
		});
	}

	public pushMultiSelect(event, Selection, originalSource){
		if(event.isUserInput) {
			let id = event.source.value;
			let check = event.source.selected;

			if (check) {
				// @ts-ignore
				let item = originalSource.find(element => element.id == id);
				let element_exist = Selection.find(element => element.id == id);

				if (!element_exist){
					Selection.push(item);
				}
			} else {
				// @ts-ignore
				Selection = Selection.filter(element => element.id != id);
			}
		}
		return Selection;
	}

	public popFromForm(form, form_name, item_id){
		let listControl = form.controls[form_name].value;

		if (listControl) {
			listControl = listControl.filter(element => element != item_id);
		}
		return listControl;
	}

	public popFromSelectionList(Selection, item_id){
		// @ts-ignore
		return Selection.filter(element => element.id != item_id);
	}

	public maxNumberOfPages(resp){
		return (resp['pagination'] ? resp['pagination'].last_page : 1);
	}

}
