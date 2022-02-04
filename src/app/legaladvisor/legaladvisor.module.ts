import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationComponent } from './registration/registration.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { LoginModule } from '../login/login.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// import { PdfViewerModule } from 'ng2-pdf-viewer';


@NgModule({
  declarations: [
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    LoginModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
    // PdfViewerModule
  ]
})
export class LegaladvisorModule { }
