import { Link } from './../common/Link';
import { PdfService } from './../services/pdf.service';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-download-file',
  templateUrl: './download-file.component.html',
  styleUrls: ['./download-file.component.scss']
})
export class DownloadFileComponent implements OnInit {
  fileUrl;
  constructor(private pdfService:PdfService, private sanitizer:DomSanitizer) { }
  links:Link[];
  ngOnInit() {
    
    this.pdfService.getFilesLinks().subscribe(
      data => {this.links = data.filesLinks;
      console.log(this.links);}
      )
  }

}
