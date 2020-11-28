import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {MatChipInputEvent} from '@angular/material/chips';
import {COMMA, ENTER} from '@angular/cdk/keycodes';

@Component({
  selector: 'app-article-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {

  @Input() form: FormGroup;

  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  keywords_en:[] =[];
  keywords_ar:[] =[];


  constructor() {
  }

  ngOnInit(): void {
  }

  add(event: MatChipInputEvent, lang = 'en'): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      if (lang == 'en'){
        // @ts-ignore
        this.keywords_en.push(value.trim());
      }
      else{
        // @ts-ignore
        this.keywords_ar.push(value.trim());
      }

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
      }
    }
    else{
      // @ts-ignore
      const index = this.keywords_ar.indexOf(tag);

      if (index >= 0) {
        this.keywords_ar.splice(index, 1);
      }
    }

  }

}
