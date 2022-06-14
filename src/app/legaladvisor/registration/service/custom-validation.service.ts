import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {
  
  accountMatchValidator(account: string, confirmaccount: string) {
  return (formGroup: FormGroup) => {
    const accountControl = formGroup.controls[account];
    const confirmAccountControl = formGroup.controls[confirmaccount];

    if (!accountControl || !confirmAccountControl) {
      return null;
    } 

    if (
      confirmAccountControl.errors &&
      !confirmAccountControl.errors.accountMismatch
    ) {
      return null;
    }

    if (accountControl.value !== confirmAccountControl.value) {
      confirmAccountControl.setErrors({ accountMismatch: true });
      return false;
    }
     else {
      confirmAccountControl.setErrors(null);
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
