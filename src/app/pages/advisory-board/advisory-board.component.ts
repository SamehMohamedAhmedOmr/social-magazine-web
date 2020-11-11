import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {AdvisoryBodiesService} from '../../core/services/Section-Module/advisory.bodies.service';

@Component({
  selector: 'app-advisory-board',
  templateUrl: './advisory-board.component.html',
  styleUrls: ['./advisory-board.component.scss']
})
export class AdvisoryBoardComponent implements OnInit {

  advisory_bodies:[] = [];

  constructor(private advisoryBodiesService:AdvisoryBodiesService,
              private ngxService: NgxUiLoaderService,
              private cdr:ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getPublicationRules();
  }

  getPublicationRules(){
    this.ngxService.start();
    this.advisoryBodiesService.list(null).subscribe(value => {
      this.advisory_bodies  = value;
      this.ngxService.stop();

      this.cdr.markForCheck();
    });
  }


}
