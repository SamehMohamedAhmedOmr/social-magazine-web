import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news.component';
import {SharedModule} from '../../shared/shared.module';



@NgModule({
  declarations: [NewsComponent],
    imports: [
        CommonModule,
        SharedModule
    ]
})
export class NewsModule { }
