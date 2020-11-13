import {Component, Input, OnInit} from '@angular/core';
import {MagazineGoalsModel} from '../../../core/models/section-module/magazine.goals.model';

@Component({
  selector: 'app-magazine-goals',
  templateUrl: './magazine-goals.component.html',
  styleUrls: ['./magazine-goals.component.scss']
})
export class MagazineGoalsComponent implements OnInit {

  @Input() goals:MagazineGoalsModel[] = null;

  constructor() {
  }

  ngOnInit(): void {
  }

}
