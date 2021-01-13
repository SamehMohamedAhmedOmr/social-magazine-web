import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-most-viewed',
  templateUrl: './most-viewed.component.html',
  styleUrls: ['./most-viewed.component.scss']
})
export class MostViewedComponent implements OnInit {

  @Input() padding:string = null;
  @Input() position:string = null;

  constructor() { }

  ngOnInit(): void {
  }

  generateArray(){
    return new Array(5);
  }
}
