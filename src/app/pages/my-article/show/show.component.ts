import {Component, OnInit} from '@angular/core';
import {ArticleModel} from '../../../core/models/article-module/article.model';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  article:ArticleModel;

  constructor() {
  }

  ngOnInit(): void {
  }

}
