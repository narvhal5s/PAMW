import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { DownloadFileComponent } from './download-file/download-file.component';

const routes: Routes = [
  {
    path:'user/signup',
    component: SignupFormComponent,
  },
  {
    path:'pdf/upload',
    component: UploadFileComponent,
  },
  {
    path:'pdf/download',
    component: DownloadFileComponent,
  }
  
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
