import {Component, OnInit} from '@angular/core';
import {DirectionType, SpinnerType} from 'ngx-ui-loader/lib/utils/types';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {


  loader_color = '#a98f5b';
  loader_type:SpinnerType = 'rotating-plane';
  pbThickness = 5;
  pbDirection:DirectionType = 'rtl';
  logoUrl = 'assets/images/logo2.png';
  overlayColor = 'rgba(40, 40, 40, 0.9)';
  overlay_text: string = null;

  constructor(private translations : TranslateService) {
  }

  ngOnInit(): void {
    this.overlay_text = this.translations.instant('BASIC.APP_NAME');
  }

  blur(){
    return 11;
  }

}
