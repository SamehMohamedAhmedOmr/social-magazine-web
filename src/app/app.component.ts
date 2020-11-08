import {Component, OnInit} from '@angular/core';
import {LangService} from './core/services/lang.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = '';
  constructor(private langService: LangService) {
  }

  ngOnInit(): void {
    this.langService.loadStyle();
  }


}
