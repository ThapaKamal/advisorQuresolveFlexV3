import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service'

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {

  notificationList!: any;


  constructor(notificationService: NotificationService) {
    this.notificationList = notificationService.getNotifications();
  }

  ngOnInit(): void {

    for (var item of this.notificationList) {
      console.log(item);
    }
  }

}
