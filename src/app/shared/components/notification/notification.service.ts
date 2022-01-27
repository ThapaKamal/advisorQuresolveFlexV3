import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  public getNotifications(): object[]{
    return[
      {
        text:"you have 1 new orders.",
        time:"just now ",
        icon:"plus_one",
      },
      {
        text:"you have 2 new orders.",
        time:"1 minute",
        icon:"error_outline",
      },   {
        text:"you have 3 new orders.",
        time:"4 minute",
        icon:"plus_one",
      },

    ]
  }

  constructor() { }
}
