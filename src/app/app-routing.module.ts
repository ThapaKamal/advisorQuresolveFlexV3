import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './admin-module/admin-layout/admin-layout.component';
import { CourtOfPraticeComponent } from './admin-module/admin-sidebarMenu/Services/court-of-pratice/court-of-pratice.component';
import { YearOfExperienceComponent } from './admin-module/admin-sidebarMenu/Services/year-of-experience/year-of-experience.component';
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
import { DashboardComponent } from './modules/dashboard/dashboard.component';
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
  children: [{
    path: 'court',
    component: CourtOfPraticeComponent
  },{
    path: 'yearofexp',
    component: YearOfExperienceComponent
  }

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
