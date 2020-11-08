import {Component, OnInit} from '@angular/core';
import {WhoIsUsService} from '../../core/services/Section-Module/who.is.us.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor(private service:WhoIsUsService) {
  }

  ngOnInit(): void {
    this.getWhoIsUs();
  }

  getWhoIsUs(){
    this.service.list(null).subscribe(value => {
      console.log(value);
    });
  }

}
