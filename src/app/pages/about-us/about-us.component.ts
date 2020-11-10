import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {WhoIsUsService} from '../../core/services/Section-Module/who.is.us.service';
import {NgxUiLoaderService} from 'ngx-ui-loader';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  who_is_us:[] = [];

  constructor(private service:WhoIsUsService,
              private ngxService: NgxUiLoaderService,
              private cdr:ChangeDetectorRef) {
  }


  ngOnInit(): void {
    this.getWhoIsUs();
  }

  getWhoIsUs(){
    this.ngxService.start();
    this.service.list(null).subscribe(value => {
      this.who_is_us  = value;
      this.ngxService.stop();
      this.cdr.markForCheck();
      console.log(this.who_is_us)
    });
  }

}
