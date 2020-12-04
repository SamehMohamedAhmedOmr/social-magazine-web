import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
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

  constructor(private articleDependenciesService: ArticleDependenciesService,
              private  cdr: ChangeDetectorRef) {
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

  // set image to form data
  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.form.controls['file'].setValue(file);

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.cdr.markForCheck();
      }

    }
  }

}
