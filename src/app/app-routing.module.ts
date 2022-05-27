import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-module/admin-layout/admin-layout.component';
import { DashboardComponent } from './admin-module/admin-sidebarMenu/dashboard/dashboard.component';
import { AreaOfPracticeComponent } from './admin-module/admin-sidebarMenu/Services/area-of-practice/area-of-practice.component';
import { BankNameComponent } from './admin-module/admin-sidebarMenu/Services/bank-name/bank-name.component';
import { BarMembershipComponent } from './admin-module/admin-sidebarMenu/Services/bar-membership/bar-membership.component';
import { BaseCityComponent } from './admin-module/admin-sidebarMenu/Services/base-city/base-city.component';
import { CourtOfPraticeComponent } from './admin-module/admin-sidebarMenu/Services/court-of-pratice/court-of-pratice.component';
import { LanguageComponent } from './admin-module/admin-sidebarMenu/Services/language/language.component';
import { YearOfExperienceComponent } from './admin-module/admin-sidebarMenu/Services/year-of-experience/year-of-experience.component';
import { LegalAdvisorUserComponent } from './admin-module/admin-sidebarMenu/users/legal-advisor-user/legal-advisor-user.component';
import { TaxAdvisorUserComponent } from './admin-module/admin-sidebarMenu/users/tax-advisor-user/tax-advisor-user.component';
import { DefaultComponent } from './layouts/default/default.component';
import { RegistrationComponent } from './legaladvisor/registration/registration.component';
import { ErrorPageComponent } from './login/error-page/error-page.component';
import { ForgetPasswordComponent } from './login/forget-password/forget-password.component';
import { RegisterConfirmationComponent } from './login/register-confirmation/register-confirmation.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { SignUpComponent } from './login/sign-up/sign-up.component';
import { SignupFailedComponent } from './login/sign-up/signup-failed/signup-failed.component';
import { AppointmentsComponent } from './modules/appointments/appointments.component';
import { ArticlesAndPublicationsComponent } from './modules/articles-and-publications/articles-and-publications.component';
import { CalenderComponent } from './modules/calender/calender.component';
import { ConsulationhistoryComponent } from './modules/consulationhistory/consulationhistory.component';
import { CustomerReviewsComponent } from './modules/customer-reviews/customer-reviews.component';
import { PaymentsComponent } from './modules/payments/payments.component';
import { ProfileComponent } from './modules/profile/profile.component';
import { VisitorsComponent } from './modules/visitors/visitors.component';
import { TaxRegistrationComponent } from './tax-advisor/tax-registration/tax-registration.component';

const routes: Routes = [{

  path: '',
  component: DefaultComponent,
  children: [{
    path: '',
    component: DashboardComponent
  }, {
    path: 'calender',
    component: CalenderComponent
  },
  {
    path: 'consulationhistory',
    component: ConsulationhistoryComponent
  },
  {
    path: 'payments',
    component: PaymentsComponent
  },
  {
    path: 'appointments',
    component: AppointmentsComponent
  },
  {
    path: 'reviews',
    component: CustomerReviewsComponent
  },
  {
    path: 'visitors',
    component: VisitorsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'articlesAndPublications',
    component: ArticlesAndPublicationsComponent
  }]
},
{
  path: 'admin',
  component: AdminLayoutComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent
    },
    {
      path: 'yearofexp',
      component: YearOfExperienceComponent
    },
    {
      path: 'areaofpratice',
      component: AreaOfPracticeComponent
    },
    {
      path: 'language',
      component: LanguageComponent
    },
    {
      path: 'basecity',
      component: BaseCityComponent
    },
    {
      path: 'barmembership',
      component: BarMembershipComponent
    },
    {
      path: 'bankname',
      component: BankNameComponent
    },
    {
      path: 'court',
      component: CourtOfPraticeComponent
    },
    {
      path: 'legalUser',
      component: LegalAdvisorUserComponent
    },
    {
      path: 'taxUser',
      component: TaxAdvisorUserComponent
    },
    

  ]
},

{
  path: 'login',
  component: SignInComponent
},

{
  path: 'signup',
  component: SignUpComponent
},
{
  path: 'signupFailed',
  component: SignupFailedComponent
},

{
  path: 'forgetPassword',
  component: ForgetPasswordComponent
},
{
  path: 'registrationConfirmation',
  component: RegisterConfirmationComponent
},
{
  path: 'lawyerRegistration',
  component: RegistrationComponent
},
{
  path: 'taxAdvisorRegistration',
  component: TaxRegistrationComponent
},
{
  path: '**',
  component: ErrorPageComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
