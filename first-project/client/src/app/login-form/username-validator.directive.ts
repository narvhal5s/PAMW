import { LoginService } from './../services/login.service';
import { Directive, forwardRef, Injectable } from '@angular/core';
import {
  AsyncValidator,
  AbstractControl,
  NG_ASYNC_VALIDATORS,
  ValidationErrors
} from '@angular/forms';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UniqueUserNameValidator implements AsyncValidator {
  constructor(private LoginService: LoginService) {}

  validate(
    ctrl: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return this.LoginService.isNameTaken(ctrl.value).pipe(
      map(isTaken => (isTaken ? { uniqueUserName: true } : null)),
      catchError(() => null)
    );
  }
}

@Directive({
  selector: '[uniqueUserName]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => UniqueUserNameValidator),
      multi: true
    }
  ]
})
export class UniqueUsernameValidatorDirective {
  constructor(private validator: UniqueUserNameValidator) {}

  validate(control: AbstractControl) {
    this.validator.validate(control);
  }
}
