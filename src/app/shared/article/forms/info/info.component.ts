import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {ArticleObserveService} from '../../../../core/services/observable/article/Article.observe.service';
import {ArticleModel} from '../../../../core/models/article-module/article.model';

@Component({
  selector: 'app-article-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Input() form: FormGroup;
  article:ArticleModel = null;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  @Input() keywords_en:string[] =[];
  @Input() keywords_ar:string[] =[];


  constructor(public articleObserveService: ArticleObserveService) {
  }

  ngOnInit(): void {
    this.subscription();
  }

  subscription() {
    this.articleObserveService.content.subscribe(model => {
      this.article = model;
    });
  }

  add(event: MatChipInputEvent, lang = 'en'): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      if (lang == 'en'){
        // @ts-ignore
        this.keywords_en.push(value.trim());
        this.article.keywords_en = this.keywords_en;
      }
      else{
        // @ts-ignore
        this.keywords_ar.push(value.trim());
        this.article.keywords_ar = this.keywords_ar;
      }

      this.articleObserveService.articleOObserve(this.article);

    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(tag, lang = 'en'): void {

    if (lang == 'en'){
      // @ts-ignore
      const index = this.keywords_en.indexOf(tag);

      if (index >= 0) {
        this.keywords_en.splice(index, 1);
        this.article.keywords_en = this.keywords_en;
      }
    }
    else{
      // @ts-ignore
      const index = this.keywords_ar.indexOf(tag);

      if (index >= 0) {
        this.keywords_ar.splice(index, 1);
        this.article.keywords_ar = this.keywords_ar;
      }
    }
    this.articleObserveService.articleOObserve(this.article);

  }

}
