import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './Componentes/header/header.component';
import { SideNavComponent } from './Componentes/side-nav/side-nav.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { HomeComponent } from './Web/home/home.component';
import { NosotrosComponent } from './Web/nosotros/nosotros.component';
import { ContactoComponent } from './Web/contacto/contacto.component';



import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { ModalComponent } from './Componentes/modal/modal.component';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';



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
    MatToolbarModule,
MatSidenavModule,
MatMenuModule,
MatListModule,
MatIconModule,
MatTabsModule,
MdbModalModule,
MdbCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
