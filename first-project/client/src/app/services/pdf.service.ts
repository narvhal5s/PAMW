import { AllFilesResponse } from './../common/AllFilesResponse';
import { Link } from './../common/Link';
import { FileRequest } from './../common/FileRequest';
import { HttpHeaders, HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginForm } from '../common/LoginForm';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  httpOptions = {
   headers: new HttpHeaders({
     'Access-Control-Allow-Origin':'*'
   })
 };

 url = "http://localhost:8080/api/pdf"

  constructor(private http:HttpClient) {
   }
   check(){
    this.http.get<LoginForm>(this.url + "/check",this.httpOptions).subscribe(
      data => {console.log(data.username)},
      error => {console.log(error)}
    );
   }

   uploadFile(file:FormData){
     this.http.post(this.url + "/uploadFile", file, this.httpOptions).subscribe(
       data => console.log(data),
       error => console.log(error)
     )
   }
   
   getFilesLinks(): Observable<AllFilesResponse>{
     return this.http.get<AllFilesResponse>(this.url + "/file", this.httpOptions);
   }

   downloadFile(link:string){
     return this.http.get<Response>(link)
   }

}
