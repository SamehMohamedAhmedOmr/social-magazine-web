import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {AccountDependenciesService} from '../../../core/services/Basic-Module/account.dependencies.service';
import {AccountDependenciesModel} from '../../../core/models/Basic-Module/account.dependencies.model';

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
  accountDependenciesModel:AccountDependenciesModel = null;

  constructor(private accountDependenciesService: AccountDependenciesService) {
  }

  ngOnInit() {
    this.loadDependencies();
  }

  loadDependencies() {
    this.accountDependenciesService.dependency_content.subscribe(model => {
      if (model){
        this.accountDependenciesModel = model;
      }
    });
  }

}
