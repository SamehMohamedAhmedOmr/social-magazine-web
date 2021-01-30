import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {PublicationRulesService} from '../../core/services/Section-Module/publication.rules.service';
import {PublicationRulesModel} from '../../core/models/section-module/publication.rules.model';
import {HomeService} from '../../core/services/Section-Module/Home.service';
import {DependenciesModel} from '../../core/models/section-module/dependencies.model';

@Component({
  selector: 'app-publication-terms',
  templateUrl: './publication-terms.component.html',
  styleUrls: ['./publication-terms.component.scss']
})
export class PublicationTermsComponent implements OnInit {

  rules:PublicationRulesModel[] = [];
  dependenciesModel:DependenciesModel;

  constructor(private publicationRulesService:PublicationRulesService,
              private ngxService: NgxUiLoaderService,
              private homeService: HomeService,
              private cdr:ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.subscribeHomeAPI();
  }

  subscribeHomeAPI() {
    this.homeService.dependencies_content.subscribe(model => {
      if (model){
        this.dependenciesModel = model;
        this.rules = this.dependenciesModel.publication_rules;
      }
    });
  }

}
