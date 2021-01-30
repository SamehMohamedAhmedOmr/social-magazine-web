import {Component, Input, OnInit} from '@angular/core';
import {MagazineGoalsModel} from '../../../core/models/section-module/magazine.goals.model';

@Component({
  selector: 'app-magazine-goals-list',
  templateUrl: './magazine-goals-list.component.html',
  styleUrls: ['./magazine-goals-list.component.scss']
})
export class MagazineGoalsListComponent implements OnInit {

  @Input() goals:MagazineGoalsModel[] = null;

  constructor() {
  }

  ngOnInit(): void {
  }

}
