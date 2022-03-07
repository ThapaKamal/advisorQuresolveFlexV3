import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../sign-in/authService/auth.service';
import { CustomValidationServiceService } from './service/custom-validation-service.service';
import { SignupPayload } from './signupPayload';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signupForm!: FormGroup;
  signupPayload!: SignupPayload;

  signupValid = true;
  hide = true;
  type!: string;

  name = '';
  profession = '';
  email = '';
  password = '';
  confirmPassword = '';


  constructor(private _formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private customValidator: CustomValidationServiceService) {

    this.signupForm = this._formBuilder.group({
      name: new FormControl('', [Validators.required]),
      profession: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: (['', Validators.required]),
    },
      {
        validator: this.customValidator.passwordMatchValidator(
          "password",
          "confirmPassword"
        )
      }
    );
  }
  ngOnInit() {
    // this.signupForm = new FormGroup({
    //   name: new FormControl('', [Validators.required]),
    //   profession: new FormControl('', [Validators.required]),
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   password: new FormControl('', [Validators.required]),
    //   confirmPassword: new FormControl('', [Validators.required])
    // }
    // )
  }


  onSubmit() {
    this.signupPayload = this.signupForm.value;
    console.log(this.signupPayload);


    this.authService.signup(this.signupPayload).subscribe((data) => {
      console.log('signup success');
      this.router.navigateByUrl('/lawyerRegistration');
    }, (error) => {
      console.log('signup failed');
      // this.router.navigateByUrl('/signupFailed');
      alert('User Already Register,Go to Log In');
    });
  }
}
