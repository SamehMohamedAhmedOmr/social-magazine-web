import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivitiesComponent } from './activities.component';
import { ActivityComponent } from './activity/activity.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ActivitiesComponent,
    children: [
      {
        path: '',
        component: ActivityComponent
      },
      {path: '**', redirectTo: '', pathMatch: ''},
    ]
  }
];

@NgModule({
  declarations: [ActivitiesComponent, ActivityComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ActivitiesModule { }
