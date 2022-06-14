import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaxRegistrationComponent } from './tax-registration/tax-registration.component';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexModule } from '@angular/flex-layout';
import { LoginModule } from '../login/login.module';




@NgModule({
  declarations: [
    TaxRegistrationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    FlexModule,
    ReactiveFormsModule,
    LoginModule

    
  ]
})
export class TaxAdvisorModule { }
