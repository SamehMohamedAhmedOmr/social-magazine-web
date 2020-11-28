import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ArticleDependenciesModel} from '../../../../core/models/pre-article-module/article.dependencies.model';
import {ArticleDependenciesService} from '../../../../core/services/pre-article-Module/Article.Dependencies.service';

@Component({
  selector: 'app-article-attachments',
  templateUrl: './attachments.component.html',
  styleUrls: ['./attachments.component.scss']
})
export class AttachmentsComponent implements OnInit {

  @Input() form: FormGroup;
  articleDependenciesModel:ArticleDependenciesModel = null;

  constructor(private articleDependenciesService: ArticleDependenciesService) {
  }

  ngOnInit(): void {
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
