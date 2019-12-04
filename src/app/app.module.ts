import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AdDispatcher} from 'ubimo-fed-home-assigment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AdDispatcher],
  bootstrap: [AppComponent]
})
export class AppModule { }
