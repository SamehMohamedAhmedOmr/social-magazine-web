import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-magazine-goals',
  templateUrl: './magazine-goals.component.html',
  styleUrls: ['./magazine-goals.component.scss']
})
export class MagazineGoalsComponent implements OnInit {

  @Input() goals;

  constructor() {
  }

  ngOnInit(): void {
  }

}
