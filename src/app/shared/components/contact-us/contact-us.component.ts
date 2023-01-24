import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactUsPayload } from './model/contactUs';
import { ContactServiceService } from './service/contact-service.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  contactUsForm!: FormGroup;
  contactUsPayload!: ContactUsPayload;

  contactUsValid = true;
  hide = true;
  type!: string;

  name = '';
  profession = '';
  email = '';


  constructor(private router: Router,
    private _formBuilder: FormBuilder,
    private contactService: ContactServiceService) 
    {
    this.contactUsForm = this._formBuilder.group({
      name: new FormControl('', [Validators.required]),
      subject: new FormControl('', [Validators.required]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
      ]),
      message: new FormControl('', [Validators.required]),
    }
    );
    this.contactUsPayload = {
      id: '',
      name: '',
      email: '',
      subject: '',
      message: '',
    }
    
  }

  ngOnInit() {
  }

  onSubmit() {
    this.contactUsPayload = this.contactUsForm.value;
    console.log(this.contactUsPayload);


    this.contactService.saveQuery(this.contactUsPayload).subscribe((data) => {
      console.log('Your Request has been Successfull send to Quresolve');
      alert('Request Send ');
      this.router.navigateByUrl('/');
    }, (error) => {
      console.log('Failed to send ur request');
      // this.router.navigateByUrl('/signupFailed');
      alert('Failed to send ur request');
    });
  }

}
