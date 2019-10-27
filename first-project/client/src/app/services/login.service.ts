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
      'Access-Control-Allow-Origin':'*'
    })
  };

  url = "server:8080"
  constructor(private http:HttpClient) {}

  addNewUser(login:string, password:string){
    console.log(login);
  }

  checkUserName(userName:string){
    return true;
  }

  isNameTaken(username:String): Observable<boolean>{
    return this.http.get<boolean>(this.url + "/api/auth/checkUsername",this.httpOptions);
  }

}
