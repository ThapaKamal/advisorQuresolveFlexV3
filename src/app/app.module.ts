import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultModule } from './layouts/default/default.module';
import { MaterialModule } from './material/material.module';
import { LoginModule } from './login/login.module';
import { LegaladvisorModule } from './legaladvisor/legaladvisor.module';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './modules/profile/profile.component'; // a plug

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaxAdvisorModule } from './tax-advisor/tax-advisor.module';
import { AdminModuleModule } from './admin-module/admin-module.module';



@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
   
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
    ReactiveFormsModule,
    FormsModule,
    TaxAdvisorModule,
    AdminModuleModule

   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
