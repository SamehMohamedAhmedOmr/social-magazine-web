import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {WhoIsUsService} from '../../core/services/Section-Module/who.is.us.service';
import {NgxSpinnerService} from 'ngx-spinner';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  who_is_us:[] = [];

  constructor(private service:WhoIsUsService,
              private cdr:ChangeDetectorRef,
              private spinner: NgxSpinnerService) {
  }


  ngOnInit(): void {
    this.getWhoIsUs();
  }

  getWhoIsUs(){
    this.spinner.show();
    this.service.list(null).subscribe(value => {
      this.who_is_us  = value;
     this.spinner.hide();
      this.cdr.markForCheck();
      console.log(this.who_is_us)
    });
  }

}
