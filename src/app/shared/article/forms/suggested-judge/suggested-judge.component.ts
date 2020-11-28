import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-article-suggested-judge',
  templateUrl: './suggested-judge.component.html',
  styleUrls: ['./suggested-judge.component.scss']
})
export class SuggestedJudgeComponent implements OnInit {

  @Input() form: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
  }

}
