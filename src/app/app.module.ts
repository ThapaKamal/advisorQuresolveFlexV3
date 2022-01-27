import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { MaterialModule } from './material/material.module';
import { LoginModule } from './login/login.module';
import { LegaladvisorModule } from './legaladvisor/legaladvisor.module';

import { CalendarModule } from 'angular-calendar';

import { DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // a plugin!


@NgModule({
  declarations: [
    AppComponent,
    
   
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule, 
    MaterialModule,
    LoginModule,
    LegaladvisorModule,
    NgbModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
