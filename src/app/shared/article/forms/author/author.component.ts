import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-article-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {

  @Input() form: FormGroup;
  @Input() educational_form: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
  }

}
