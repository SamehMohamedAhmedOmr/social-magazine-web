import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ArticleModel} from '../../../../core/models/article-module/article.model';

@Component({
  selector: 'app-article-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.scss']
})
export class ConfirmComponent implements OnInit {

  @Input() article:ArticleModel = null;

  constructor() { }

  ngOnInit(): void {
  }

}
