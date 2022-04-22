import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { NotificationComponent } from './components/notification/notification.component';
import { AreaComponent } from './widgets/area/area.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { CardComponent } from './widgets/card/card.component';
import { PieComponent } from './widgets/pie/pie.component';
import { MaterialModule } from '../material/material.module';
import { ExitDialogComponent } from './components/header/exit-dialog/exit-dialog.component';

import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NotificationComponent,
    AreaComponent,
    CardComponent,
    PieComponent,
    ExitDialogComponent
  ],

  entryComponents:[ExitDialogComponent],

  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule,
    HighchartsChartModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    FlexLayoutModule,
    AreaComponent,
    CardComponent,
    PieComponent


  ]
})
export class SharedModule { }
