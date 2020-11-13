import {Component, Input, OnInit} from '@angular/core';
import {WhoIsUsModel} from '../../../core/models/section-module/who.is.us.model';

@Component({
  selector: 'app-who-is-us',
  templateUrl: './who-is-us.component.html',
  styleUrls: ['./who-is-us.component.scss']
})
export class WhoIsUsComponent implements OnInit {

  @Input() who_is_us:WhoIsUsModel[] = [];

  constructor() {
  }

  ngOnInit(): void {
  }

}
