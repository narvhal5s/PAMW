import { UniqueUsernameValidatorDirective } from './common/username-validator.directive';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule , } from '@angular/forms';
import { FileSaverModule, FileSaverService } from 'ngx-filesaver';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { CookieService } from 'ngx-cookie-service';
import { httpInterceptorProviders} from './common/AuthInterceptor';
import { UploadFileComponent } from './upload-file/upload-file.component'
import { FileUploadModule } from "ng2-file-upload";
import { DownloadFileComponent } from './download-file/download-file.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    UniqueUsernameValidatorDirective,
    SignupFormComponent,
    UploadFileComponent,
    DownloadFileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    FileUploadModule,
    FileSaverModule
  ],
  providers: [
    CookieService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
