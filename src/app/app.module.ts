import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AuthLinksComponent} from './pages/auth-links/auth-links.component';
import {NotFoundComponent} from './pages/not-found/not-found.component';
import {TranslateModule} from '@ngx-translate/core';
import {LayoutComponent} from './layout/layout.component';
import {FooterComponent} from './layout/footer/footer.component';
import {HeaderComponent} from './layout/header/header.component';
import {AccountLinksComponent} from './layout/header/account-links/account-links.component';
import {MarqueeComponent} from './layout/marquee/marquee.component';
import {NgMarqueeModule} from 'ng-marquee';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {Interceptor} from './interceptor';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {MatDividerModule} from '@angular/material/divider';

import { NgxSpinnerModule } from "ngx-spinner";
import {NgxUiLoaderModule} from 'ngx-ui-loader';
import {VisitorCountComponent} from './layout/footer/visitor-count/visitor-count.component';
import {ToastNoAnimationModule, ToastrModule} from 'ngx-toastr';
import {MatPaginatorIntl} from '@angular/material/paginator';
import {getPaginatorIntl} from './core/config/paginatior.language';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';



@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FooterComponent,
    HeaderComponent,
    NotFoundComponent,
    AuthLinksComponent,
    AccountLinksComponent,
    MarqueeComponent,
    VisitorCountComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'serverApp'}),
    AppRoutingModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    NgMarqueeModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {enabled: environment.production}),
    MatDividerModule,
    NgxSpinnerModule,
    // Import NgxUiLoaderModule
    NgxUiLoaderModule,
    ToastrModule.forRoot(), // ToastrModule added
    ToastNoAnimationModule.forRoot(),
    NgxYoutubePlayerModule.forRoot()



  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: Interceptor,
      multi: true
    },
    { provide: MatPaginatorIntl, useValue: getPaginatorIntl() }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);