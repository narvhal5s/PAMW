import { PdfService } from './../services/pdf.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { formatDate } from '@angular/common';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FileUploader} from 'ng2-file-upload';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-upload-file',
  templateUrl: './upload-file.component.html',
  styleUrls: ['./upload-file.component.scss']
})
export class UploadFileComponent implements OnInit {

  @ViewChild('fileInput',{static:false}) fileInput: ElementRef;
 
  uploader: FileUploader;
  isDropOver: boolean;

  constructor(private tokenService:LoginService){}
 
  ngOnInit(): void {
    const headers = [{name: 'Accept', value: 'application/json'},
    {name:"Authorization", value :  'Bearer ' + this.tokenService.getToken()}];
    this.uploader = new FileUploader({url: 'http://localhost:8080/api/pdf/uploadFile', autoUpload: true, headers: headers});
  }
 
  fileOverAnother(e: any): void {
    this.isDropOver = e;
  }
 
  fileClicked() {
    this.fileInput.nativeElement.click();
  }
}
