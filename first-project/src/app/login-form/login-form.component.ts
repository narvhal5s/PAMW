import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})
export class LoginFormComponent implements OnInit {
  userName:string = "";
  password:string = "";
  repetedPassword:string = "";
  message:string;
  userNameValid:boolean = true;
  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

  submitForm(){
    this.loginService.addNewUser(this.userName,this.password);
  }

  
  userNameChanged(){
    this.message = "słaby login";
    this.userNameValid = false;
  }

}
