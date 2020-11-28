import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ArticleDependenciesModel} from '../../../../core/models/pre-article-module/article.dependencies.model';
import {ArticleDependenciesService} from '../../../../core/services/pre-article-Module/Article.Dependencies.service';

@Component({
  selector: 'app-article-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit {

  @Input() form: FormGroup;
  articleDependenciesModel:ArticleDependenciesModel = null;

  constructor(private articleDependenciesService: ArticleDependenciesService) {
  }

  ngOnInit() {
    this.loadDependencies();
  }

  loadDependencies() {
    this.articleDependenciesService.content.subscribe(model => {
      if (model){
        this.articleDependenciesModel = model;
      }
    });
  }

}
