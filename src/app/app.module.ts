import { NgModule } from '@angular/core';
import { BrowserModule, TransferState } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Componentes/header/header.component';
import { SideNavComponent } from './Componentes/side-nav/side-nav.component';

//ANGULAR MATERIAL
import { AngularMaterialModule } from './angular-material.module';

import { HomeComponent } from './Web/home/home.component';
import { NosotrosComponent } from './Web/nosotros/nosotros.component';
import { ContactoComponent } from './Web/contacto/contacto.component';

import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from './Componentes/modal/modal.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';


// import ngx-translate and the http loader
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { TransferHttpCacheModule } from '@nguniversal/common';
import { translateBrowserLoaderFactory } from '../shared/loaders/translate-browser.loader';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    HomeComponent,
    NosotrosComponent,
    ContactoComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    MdbModalModule,
    MdbCarouselModule,
  // ngx-translate and the loader module
  HttpClientModule,
  TranslateModule.forRoot({
    loader: {
        provide: TranslateLoader,
        useFactory: (translateBrowserLoaderFactory),
        deps: [HttpClient, TransferState]
    }
})

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

