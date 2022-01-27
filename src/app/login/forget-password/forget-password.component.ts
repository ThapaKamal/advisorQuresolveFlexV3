import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

   forgetPasswordValid = true;
   username = '';
   password = '';
   checkbox = '';


  constructor() { }

  ngOnInit(): void {
  }

  opensweetalert(){
    Swal.fire(
      'Forget Password',
      'A mail has been send to your email',
      'success'
    )
  }
}
