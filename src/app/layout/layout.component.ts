import {Component, OnInit} from '@angular/core';
import {SpinnerType} from 'ngx-ui-loader/lib/utils/types';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {


  loader_color = '#a98f5b';
  loader_type:SpinnerType = 'rotating-plane';
  constructor() {
  }

  ngOnInit(): void {
  }

}
