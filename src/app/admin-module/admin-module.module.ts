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
import { BankNameComponent } from './admin-sidebarMenu/Services/bank-name/bank-name.component';
import { BankNameDialogBoxComponent } from './admin-sidebarMenu/Services/bank-name/bank-name-dialog-box/bank-name-dialog-box.component';
import { BarMembershipComponent } from './admin-sidebarMenu/Services/bar-membership/bar-membership.component';
import { BarMembershipDialogBoxComponent } from './admin-sidebarMenu/Services/bar-membership/bar-membership-dialog-box/bar-membership-dialog-box.component';
import { BaseCityComponent } from './admin-sidebarMenu/Services/base-city/base-city.component';
import { BaseCityDialogBoxComponent } from './admin-sidebarMenu/Services/base-city/base-city-dialog-box/base-city-dialog-box.component';
import { LanguageComponent } from './admin-sidebarMenu/Services/language/language.component';
import { LanguageDialogBoxComponent } from './admin-sidebarMenu/Services/language/language-dialog-box/language-dialog-box.component';
import { DashboardComponent } from './admin-sidebarMenu/dashboard/dashboard.component';
import { PieChartComponent } from './admin-sidebarMenu/dashboard/widgets/pie/pie-chart/pie-chart.component';
import { ChartComponent } from './admin-sidebarMenu/dashboard/widgets/chart/chart/chart.component';
import { AreaComponent } from './admin-sidebarMenu/dashboard/widgets/area/area/area.component';
import { CardComponent } from './admin-sidebarMenu/dashboard/widgets/card/card/card.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { LegalAdvisorUserComponent } from './admin-sidebarMenu/users/legal-advisor-user/legal-advisor-user.component';
import { TaxAdvisorUserComponent } from './admin-sidebarMenu/users/tax-advisor-user/tax-advisor-user.component';




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
    AreaofpracticeDialogboxComponent,
    BankNameComponent,
    BankNameDialogBoxComponent,
    BarMembershipComponent,
    BarMembershipDialogBoxComponent,
    BaseCityComponent,
    BaseCityDialogBoxComponent,
    LanguageComponent,
    LanguageDialogBoxComponent,
    DashboardComponent,
    PieChartComponent,
    ChartComponent,
    AreaComponent,
    CardComponent,
    LegalAdvisorUserComponent,
    TaxAdvisorUserComponent
 

  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    MatTableModule,
    HighchartsChartModule,

  ]
})
export class AdminModuleModule { }
