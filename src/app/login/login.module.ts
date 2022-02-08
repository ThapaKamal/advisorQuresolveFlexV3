import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { RegisterConfirmationComponent } from './register-confirmation/register-confirmation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxWebstorageModule} from 'ngx-webstorage';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';







@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    ErrorPageComponent,
    FooterComponent,
    RegisterConfirmationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
  ],
  exports: [
    FooterComponent,
  ],
})
  
export class LoginModule { }
