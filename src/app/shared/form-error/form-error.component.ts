import {Component, Input, OnInit} from '@angular/core';
import {FormErrorService} from '../../../core/services/FormError.service';
import {FormGroup} from '@angular/forms';

@Component({
	selector: 'kt-form-error',
	templateUrl: './form-error.component.html',
	styleUrls: ['./form-error.component.scss']
})
export class FormErrorComponent implements OnInit {

	@Input() form: FormGroup;
	@Input() controlName: string;
	@Input() validationType: string;
	@Input() controlText : string;
	@Input() text_direction = '';
	@Input() IS_F :boolean = false;

	constructor(private formErrorService: FormErrorService) {
	}

	ngOnInit() {
	}

	isControlHasError(): boolean {
		return this.formErrorService.isControlHasError(this.form, this.controlName, this.validationType);
	}

}
