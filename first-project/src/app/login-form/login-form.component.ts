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

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

  submitForm(){
    this.loginService.addNewUser(this.userName,this.password);
  }

}
