import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { RegisterForm } from '../common/RegisterForm'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UniqueUserNameValidator } from '../common/username-validator.directive';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})

export class SignupFormComponent implements OnInit {
  constructor(private loginService:LoginService,
              private userNameValidator:UniqueUserNameValidator) { }
  form:RegisterForm;
  error:string;
  userForm:FormGroup;
  placeholder={username:"", password:"",email:""}
  ngOnInit() {
    this.userForm = new FormGroup(
      {
        'username': new FormControl(this.placeholder.username,
        {
          validators: [Validators.required,Validators.minLength(6)],
          asyncValidators: [this.userNameValidator.validate.bind(this.userNameValidator)],
          updateOn: 'blur'
        }),
        'password': new FormControl( this.placeholder.password, [
          Validators.required,
          Validators.minLength(8),
        ]),
        'email': new FormControl( this.placeholder.email, [
          Validators.required,
        ]),
      }
    )
  }

  get username() { return this.userForm.get('username'); }

  get password() { return this.userForm.get('password'); }

  get email() { return this.userForm.get('email'); }

  confirm(){
    this.loginService.addNewUser(this.username.value,this.password.value,this.email.value).subscribe(x => console.log(x))
  }
}
