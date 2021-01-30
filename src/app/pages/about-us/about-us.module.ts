import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AboutUsComponent} from './about-us.component';
import {RouterModule, Routes} from '@angular/router';
import {PagesModule} from '../pages.module';
import { WhoIsUsComponent } from './who-is-us/who-is-us.component';
import {MatDividerModule} from '@angular/material/divider';


const routes: Routes = [
  {
    path: '',
    component: AboutUsComponent
  }
];


@NgModule({
  declarations: [AboutUsComponent, WhoIsUsComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        PagesModule,
        MatDividerModule,
    ]
})
export class AboutUsModule {
}
