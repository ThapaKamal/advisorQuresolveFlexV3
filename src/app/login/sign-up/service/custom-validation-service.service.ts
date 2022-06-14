import { Injectable } from "@angular/core";
import { FormGroup, AbstractControl, FormControl, ValidatorFn } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class CustomValidationServiceService {
  passwordMatchValidator(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (
        confirmPasswordControl.errors &&
        !confirmPasswordControl.errors.passwordMismatch
      ) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({ passwordMismatch: true });
        return false;
      }
       else {
        confirmPasswordControl.setErrors(null);
        return true;
      }
    };
  }


  // validateUsernameNotTaken(control: AbstractControl) {
  //   return this.checkUsernameNotTaken(control.value).pipe(
  //     map(res => {
  //       return res ? null : { usernameTaken: true };
  //     })
  //   );
  // }

  // //Fake API call -- You can have this in another service
  // checkUsernameNotTaken(username: string): Observable<boolean> {
  //   return this.http.get("assets/fakedb.json").pipe(
  //     map((usernameList: Array<any>) =>
  //       usernameList.filter(user => user.username === username)
  //     ),
  //     map(users => !users.length)
  //   );
  // }
}
