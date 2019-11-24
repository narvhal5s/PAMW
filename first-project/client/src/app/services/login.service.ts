import { Injectable } from '@angular/core';
import { Observable, empty, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginForm } from '../common/LoginForm';
import { JwtResponse } from '../common/JwtResponse';
import { CookieService } from 'ngx-cookie-service'

const TOKEN_KEY = 'token';
const USERNAME_KEY = 'username';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json'
    })
  };

  url = "http://localhost:8080/api/auth"
  constructor(private http: HttpClient,
    private cookieService: CookieService) { }

  addNewUser(username: String, password: String, email: String): Observable<String> {
    var user = {
      username,
      password,
      email
    }
    return this.http.post<any>(this.url + "/signup", user, this.httpOptions);
  }

  isNameTaken(username: String): Observable<boolean> {
    return this.http.get<boolean>(this.url + "/checkUsername/" + username, this.httpOptions);
  }

  login(loginInfo: LoginForm): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.url + "/signin", loginInfo, this.httpOptions);
  }


  isLogged(): boolean {
    if (this.cookieService.get(TOKEN_KEY)) {
      return true;
    }
    return false;
  }

  setCookies(data: JwtResponse) {
    this.cookieService.set(TOKEN_KEY, data.token);
    this.cookieService.set(USERNAME_KEY, data.username);
  }

  getUsername(): string {
    return this.cookieService.get(USERNAME_KEY);
  }

  getToken(): string {
    return this.cookieService.get(TOKEN_KEY);
  }

  signOut(): Observable<any> {
    var jwt: JwtResponse = new JwtResponse(this.cookieService.get(TOKEN_KEY));
    
    return this.http.post<any>(this.url + "/logout", jwt , this.httpOptions)
  }

  deleteCookies(){
    this.cookieService.deleteAll();
  }

}
