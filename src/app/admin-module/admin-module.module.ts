import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { SharedModule } from '../shared/shared.module';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { CourtOfPraticeComponent } from './admin-sidebarMenu/Services/court-of-pratice/court-of-pratice.component';
import { DialogboxComponent } from './admin-sidebarMenu/Services/court-of-pratice/dialogbox/dialogbox/dialogbox.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { YearofexpDialogboxComponent } from './admin-sidebarMenu/Services/year-of-experience/yearofexp-dialogbox/yearofexp-dialogbox.component';
import { YearOfExperienceComponent } from './admin-sidebarMenu/Services/year-of-experience/year-of-experience.component';
import { ConfirmDeleteDialogBoxComponent } from './admin-sidebarMenu/Services/Common/confirm-delete-dialog-box/confirm-delete-dialog-box.component';
import { AreaOfPracticeComponent } from './admin-sidebarMenu/Services/area-of-practice/area-of-practice.component';
import { AreaofpracticeDialogboxComponent } from './admin-sidebarMenu/Services/area-of-practice/areaofpractice-dialogbox/areaofpractice-dialogbox.component';







@NgModule({
  declarations: [
    AdminLayoutComponent,
    AdminSidebarComponent,
    CourtOfPraticeComponent,
    DialogboxComponent,
    YearofexpDialogboxComponent,
    YearOfExperienceComponent,
    ConfirmDeleteDialogBoxComponent,
    AreaOfPracticeComponent,
    AreaofpracticeDialogboxComponent
 

  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    MatTableModule

  ]
})
export class AdminModuleModule { }
