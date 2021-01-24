import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NewsComponent} from './news.component';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { ListComponent } from './list/list.component';
import {NgxPaginationModule} from 'ngx-pagination';


const routes: Routes = [
  {
    path: '',
    component: NewsComponent,
    children: [
      {
        path: '',
        component: ListComponent
      },
      {
        path: ':slug',
        component: DetailsComponent
      },
      {path: '**', redirectTo: '', pathMatch: ''},
    ]
  }
];

@NgModule({
  declarations: [NewsComponent, DetailsComponent, ListComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        NgxPaginationModule
    ]
})
export class NewsModule {
}
