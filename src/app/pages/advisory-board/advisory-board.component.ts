import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {AdvisoryBodiesService} from '../../core/services/Section-Module/advisory.bodies.service';
import {AdvisoryBodyModel} from '../../core/models/section-module/advisory.body.model';
import {HomeService} from '../../core/services/Section-Module/Home.service';
import {DependenciesModel} from '../../core/models/section-module/dependencies.model';

@Component({
  selector: 'app-advisory-board',
  templateUrl: './advisory-board.component.html',
  styleUrls: ['./advisory-board.component.scss']
})
export class AdvisoryBoardComponent implements OnInit {

  advisory_bodies:AdvisoryBodyModel[] = [];

  dependenciesModel:DependenciesModel;

  constructor(private advisoryBodiesService:AdvisoryBodiesService,
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
        this.advisory_bodies = this.dependenciesModel.advisory_body;
      }
    });
  }

}
