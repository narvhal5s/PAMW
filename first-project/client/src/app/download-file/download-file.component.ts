import { Link } from './../common/Link';
import { PdfService } from './../services/pdf.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-download-file',
  templateUrl: './download-file.component.html',
  styleUrls: ['./download-file.component.scss']
})
export class DownloadFileComponent implements OnInit {

  constructor(private pdfService:PdfService) { }
  links:Link[];
  ngOnInit() {
    this.pdfService.getFilesLinks().subscribe(
      data => {this.links = data;
      console.log(this.links);}
      )
  }

  download(){
    console.log("save")
  }

}
