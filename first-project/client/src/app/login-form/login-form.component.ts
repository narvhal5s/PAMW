import { Component, OnInit } from '@angular/core';
import { LoginForm } from '../common/LoginForm'
import { LoginService } from '../services/login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PdfService } from '../services/pdf.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.sass']
})

export class LoginFormComponent implements OnInit {
  model: any = {};
  isLoggedIn: boolean = false;
  isLoginFailed = false;
  username: string = "";
  errorMessage = '';
  private loginInfo: LoginForm;

  constructor(private authService: LoginService, private pdf:PdfService) { }

  ngOnInit() {
    if (this.authService.isLogged()) {
      this.isLoggedIn = true;
      this.username = this.authService.getUsername();
    }
  }

  confirm() {
    console.log(this.model);
    this.loginInfo = new LoginForm(this.model.username, this.model.password);
    this.authService.login(this.loginInfo).subscribe(
      data => {
        this.authService.setCookies(data);
        this.isLoggedIn = true; 
        this.isLoginFailed = false;
        this.reloadPage();
      },
      error => {
        console.log(error);
        this.errorMessage = error.error.message;
        this.isLoginFailed = true;
      }
    );
  }
  reloadPage() {
    window.location.reload();
  }
  logout() {
    this.authService.signOut().subscribe(data =>{
      this.authService.deleteCookies();
      window.location.reload();
    },
    error => {
      console.log(error);
      this.authService.deleteCookies();
      window.location.reload();
    }
    );
  }
}
