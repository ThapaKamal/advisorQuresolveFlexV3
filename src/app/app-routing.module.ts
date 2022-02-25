import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { InconsultationComponent } from './modules/inconsultation/inconsultation.component';
import { MynetworkComponent } from './modules/mynetwork/mynetwork.component';
import { PaymentsComponent } from './modules/payments/payments.component';
import { VisitorsComponent } from './modules/visitors/visitors.component';

const routes: Routes = [{

  path: '',
  component: DefaultComponent,
  children: [{
    path:'',
    component: DashboardComponent
  }, {
    path:'calender',
    component: CalenderComponent
  },
  {
    path:'consulationhistory',
    component: ConsulationhistoryComponent
  },
  {
    path:'payments',
    component: PaymentsComponent
  },
  {
    path:'appointments',
    component: AppointmentsComponent
  },
  {
    path:'reviews',
    component: CustomerReviewsComponent
  },
  {
    path:'visitors',
    component: VisitorsComponent
  },
  {
    path:'articlesAndPublications',
    component: ArticlesAndPublicationsComponent
  }]
},

{
  path:'login',
  component: SignInComponent
},

{
  path:'signup',
  component: SignUpComponent
},
{
  path:'signupFailed',
  component: SignupFailedComponent
},

{
  path:'forgetPassword',
  component: ForgetPasswordComponent
},
{
  path:'registrationConfirmation',
  component: RegisterConfirmationComponent
},
{
  path:'lawyerRegistration',
  component: RegistrationComponent
},
{
  path:'**',
  component: ErrorPageComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
