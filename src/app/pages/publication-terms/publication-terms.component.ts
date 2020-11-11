import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NgxUiLoaderService} from 'ngx-ui-loader';
import {PublicationRulesService} from '../../core/services/Section-Module/publication.rules.service';

@Component({
  selector: 'app-publication-terms',
  templateUrl: './publication-terms.component.html',
  styleUrls: ['./publication-terms.component.scss']
})
export class PublicationTermsComponent implements OnInit {

  rules:[] = [];

  constructor(private publicationRulesService:PublicationRulesService,
              private ngxService: NgxUiLoaderService,
              private cdr:ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.getPublicationRules();
  }

  getPublicationRules(){
    this.ngxService.start();
    this.publicationRulesService.list(null).subscribe(value => {
      this.rules  = value;
      this.ngxService.stop();

      this.cdr.markForCheck();
    });
  }

}
