import { Injectable } from '@angular/core';
import { Observable, empty, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
   httpOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':'*',
      'Content-Type': 'application/json'
    })
  };

  url = "http://localhost:8080"
  constructor(private http:HttpClient) {}

  addNewUser(username:String, password:String,email:String): Observable<String>{
    var user ={
      username,
      password,
      email
    }
    return this.http.post<any>(this.url+ "/api/auth/saveUser",user,this.httpOptions);
  }

  isNameTaken(username:String): Observable<boolean>{
    return this.http.get<boolean>(this.url + "/api/auth/checkUsername/"+username,this.httpOptions);
  }

}
