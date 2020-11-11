import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-most-downloaded',
  templateUrl: './most-downloaded.component.html',
  styleUrls: ['./most-downloaded.component.scss']
})
export class MostDownloadedComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  generateArray(){
    return new Array(5);
  }

}
