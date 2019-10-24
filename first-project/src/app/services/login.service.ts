import { Injectable } from '@angular/core';
import { Observable, empty, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() {}

  addNewUser(login:string, password:string){
    console.log(login);
  }

  checkUserName(userName:string){
    return true;
  }

  isNameTaken(username:String): Observable<boolean>{
    return of (false).pipe(delay(3000));
  }


}
