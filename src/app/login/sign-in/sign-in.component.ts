import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './authService/auth.service';
import { LoginPayload } from './login-Payload';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  loginForm!: FormGroup;
  loginPayload!: LoginPayload;

  hide =true;
  type! :string;

   loginValid = true;
   username = '';
   password = '';
   checkbox = '';

  constructor( private _formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router) 
  { }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: new FormControl('', [Validators.required,]),
    });
      this.loginPayload ={
        username :'',
        password : '',
        checkbox : false
      }
  }

  
//   onSubmit() {
//     this.loginPayload.username = this.loginForm!.get('username').value;
//     this.loginPayload.password = this.loginForm!.get('password').value;
//     this.loginPayload.checkbox = this.loginForm!.get('checkbox').value;

//     this.authService.login(this.loginPayload).subscribe(data => {
//       if (data) {
//         console.log('login success');
//         this.router.navigateByUrl('/home');
//       } else {
//         console.log('Login failed');
//       }
//     });
//   }
// }

  onSubmit(){
    this.loginPayload = this.loginForm.value;
    console.log(this.loginPayload);
    
    this.authService.login(this.loginPayload).subscribe((data: any) => {
      if (data) {
        console.log('login success');
        this.router.navigateByUrl('/');
      } else {
        console.log('Login failed');
      }
    });
  }


}
