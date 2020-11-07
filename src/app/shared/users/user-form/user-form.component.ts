import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {CountriesService} from '../../../core/services/Basic-Module/countries.service';
import {GendersService} from '../../../core/services/Basic-Module/genders.service';
import {TitlesService} from '../../../core/services/Basic-Module/titles.service';
import {EducationalDegreesService} from '../../../core/services/Basic-Module/educational-degrees.service';
import {EducationalLevelsService} from '../../../core/services/Basic-Module/educational-levels.service';

@Component({
	selector: 'kt-user-form',
	templateUrl: './user-form.component.html',
	styleUrls: ['./user-form.component.scss'],
	providers: [{
		provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
	}]
})
export class UserFormComponent implements OnInit {

	@Input() form: FormGroup;
	@Input() educational_form: FormGroup;
	@Input() hide_password = false;

	countries: [] = [];
	genders: [] = [];
	titles: [] = [];
	educational_degrees: [] = [];
	educational_levels: [] = [];

	constructor(private countriesService: CountriesService,
				private gendersService:GendersService,
				private titlesService:TitlesService,
				private educationalDegreesService: EducationalDegreesService,
				private educationalLevelsService: EducationalLevelsService,
				private cdr: ChangeDetectorRef) {
	}

	ngOnInit() {
		this.loadDependencies();
	}

	loadDependencies(){
		this.countriesService.list(null).subscribe(
			(resp) => {
				this.countries = resp;
				this.cdr.markForCheck();
			} , error => {
				this.countries = [];
				this.cdr.markForCheck();
			});

		this.gendersService.list(null).subscribe(
			(resp) => {
				this.genders = resp;
				this.cdr.markForCheck();
			} , error => {
				this.genders = [];
				this.cdr.markForCheck();
			});

		this.titlesService.list(null).subscribe(
			(resp) => {
				this.titles = resp;
				this.cdr.markForCheck();
			} , error => {
				this.titles = [];
				this.cdr.markForCheck();
			});

		this.educationalDegreesService.list(null).subscribe(
			(resp) => {
				this.educational_degrees = resp;
				this.cdr.markForCheck();
			} , error => {
				this.educational_degrees = [];
				this.cdr.markForCheck();
			});

		this.educationalLevelsService.list(null).subscribe(
			(resp) => {
				this.educational_levels = resp;
				this.cdr.markForCheck();
			} , error => {
				this.educational_levels = [];
				this.cdr.markForCheck();
			});

	}

}
