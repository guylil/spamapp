import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AdDispatcher} from 'ubimo-fed-home-assigment';
import {MatCardModule, MatInputModule, MatSidenavModule} from '@angular/material/';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdWindowComponent } from './ad-window/ad-window.component';
import { AdHostDirective } from './ad-host.directive';
import {AdsService} from './ads.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    SidebarComponent,
    AdHostDirective,
    AdWindowComponent,
  ],
  entryComponents: [AdWindowComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule, MatInputModule, MatCardModule
  ],
  providers: [AdDispatcher, AdsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
