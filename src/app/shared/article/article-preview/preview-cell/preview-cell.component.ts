import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-preview-cell',
  templateUrl: './preview-cell.component.html',
  styleUrls: ['./preview-cell.component.scss']
})
export class PreviewCellComponent implements OnInit {

  @Input() title:string;
  @Input() value:string;

  constructor() {
  }

  ngOnInit(): void {
  }

}
