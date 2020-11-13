import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {CountryModel} from '../../../../core/models/Basic-Module/country.model';
import {GenderModel} from '../../../../core/models/Basic-Module/gender.model';
import {TitleModel} from '../../../../core/models/Basic-Module/title.model';
import {CountriesService} from '../../../../core/services/Basic-Module/countries.service';
import {GendersService} from '../../../../core/services/Basic-Module/genders.service';
import {TitlesService} from '../../../../core/services/Basic-Module/titles.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() educational_form: FormGroup;
  @Input() hide_password = false;

  countries: CountryModel[] = [];
  genders: GenderModel[] = [];
  titles: TitleModel[] = [];
  constructor(private countriesService: CountriesService,
              private gendersService:GendersService,
              private titlesService:TitlesService,
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


  }
}
