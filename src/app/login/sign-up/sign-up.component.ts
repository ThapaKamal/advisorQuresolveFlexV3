import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  // signupForm!: FormGroup;
  // profession = new FormControl('', [Validators.required]);

  signupValid = true;
  email = '';
  password = '';
  confirmPassword = '';
  name = '';
  profession = '';

  constructor() { }

  ngOnInit() {
    // this.signupForm = new FormGroup({
    //   profession: new FormControl('', [Validators.required])
    // })
  }

}
