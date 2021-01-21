import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PhotosComponent} from './photos.component';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from 'src/app/shared/shared.module';
import {DetailsComponent} from './details/details.component';
import {ListComponent} from './list/list.component';

const routes: Routes = [
  {
    path: '',
    component: PhotosComponent,
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
  declarations: [PhotosComponent, DetailsComponent, ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class PhotosModule {
}
