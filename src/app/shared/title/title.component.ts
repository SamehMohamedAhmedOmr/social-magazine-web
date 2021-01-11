import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  @Input() icon:string = null;
  @Input() main_title:string = null;
  @Input() sub_title:string = null;
  @Input() description:string = null;

  constructor() { }

  ngOnInit(): void {
  }

}
