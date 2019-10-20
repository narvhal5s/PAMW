import { Injectable } from '@angular/core';

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

}
