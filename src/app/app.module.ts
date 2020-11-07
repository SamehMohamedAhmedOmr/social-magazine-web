import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthLinksComponent} from './pages/auth-links/auth-links.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {TranslateModule} from '@ngx-translate/core';
import {CustomDatePipe} from './core/models/Base/custom.datepipe';
import {LayoutComponent} from './layout/layout.component';
import {FooterComponent} from './layout/footer/footer.component';
import {HeaderComponent} from './layout/header/header.component';
import {AccountLinksComponent} from './layout/header/account-links/account-links.component';
import {MarqueeComponent} from './layout/marquee/marquee.component';
import {NgMarqueeModule} from 'ng-marquee';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    AuthLinksComponent,
    AccountLinksComponent,
    CustomDatePipe,
    MarqueeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    NgMarqueeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
