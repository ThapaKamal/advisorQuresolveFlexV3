import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { CalenderComponent } from 'src/app/modules/calender/calender.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AreaDataService } from 'src/app/modules/services/area-data.service';
import { CardsDataService } from 'src/app/modules/services/cards-data.service';
import { PieDataService } from 'src/app/modules/services/pie-data.service';
import { ConsulationhistoryComponent } from 'src/app/modules/consulationhistory/consulationhistory.component';
import { InconsultationComponent } from 'src/app/modules/inconsultation/inconsultation.component';
import { MynetworkComponent } from 'src/app/modules/mynetwork/mynetwork.component';
import { AppointmentsComponent } from 'src/app/modules/appointments/appointments.component';
import { ArticlesAndPublicationsComponent } from 'src/app/modules/articles-and-publications/articles-and-publications.component';
import { CustomerReviewsComponent } from 'src/app/modules/customer-reviews/customer-reviews.component';
import { PaymentsComponent } from 'src/app/modules/payments/payments.component';
import { VisitorsComponent } from 'src/app/modules/visitors/visitors.component';
import { MaterialModule } from 'src/app/material/material.module';

import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction';

import { CalendarModule } from 'angular-calendar';

import { DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns'; // a plugin!
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddPostComponent } from 'src/app/modules/articles-and-publications/addPost/add-post/add-post.component';
// import { ProfileComponent } from 'src/app/modules/profile/profile.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientInterceptor } from 'src/app/modules/articles-and-publications/addPost/add-post/http-client-interceptor';
import { HomeComponent } from 'src/app/modules/articles-and-publications/addPost/home/home.component';
import { PostComponent } from 'src/app/modules/articles-and-publications/addPost/post/post.component';
import { StarRatingComponent } from 'src/app/modules/customer-reviews/star-rating/star-rating.component';
import { FlexLayoutModule } from '@angular/flex-layout';






FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    CalenderComponent,
    InconsultationComponent,
    ConsulationhistoryComponent,
    MynetworkComponent,
    AppointmentsComponent,
    PaymentsComponent,
    ArticlesAndPublicationsComponent,
    CustomerReviewsComponent,
    VisitorsComponent,
    AddPostComponent,
    HomeComponent,
    PostComponent,
    StarRatingComponent,

    // ProfileComponent,
    // FormsModule,
    // ReactiveFormsModule

  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    FlexLayoutModule,
    MaterialModule,
    FullCalendarModule, // register FullCalendar with you app
    FormsModule,
    ReactiveFormsModule,  
    CKEditorModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })

  ],
  providers:[
    AreaDataService,
    CardsDataService,
    PieDataService,
    {provide:HTTP_INTERCEPTORS,useClass:HttpClientInterceptor,multi:true}
  ]
})
export class DefaultModule { }
