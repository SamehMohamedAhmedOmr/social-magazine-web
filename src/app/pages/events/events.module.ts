import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsComponent } from './events.component';
import { EventComponent } from './event/event.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { DetailsComponent } from './details/details.component';
import {NgxPaginationModule} from 'ngx-pagination';

const routes: Routes = [
  {
    path: '',
    component: EventsComponent,
    children: [
      {
        path: '',
        component: EventComponent
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
  declarations: [EventsComponent, EventComponent, DetailsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        NgxPaginationModule
    ]
})
export class EventsModule { }
