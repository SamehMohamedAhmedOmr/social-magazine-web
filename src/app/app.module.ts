import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {LayoutComponent} from './pages/layout/layout.component';
import {FooterComponent} from './pages/footer/footer.component';
import {AccountLinksComponent} from './pages/header/account-links/account-links.component';
import {AuthLinksComponent} from './pages/auth-links/auth-links.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {HeaderComponent} from './pages/header/header.component';
import {TranslateModule} from '@ngx-translate/core';
import {CustomDatePipe} from './core/models/Base/custom.datepipe';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
