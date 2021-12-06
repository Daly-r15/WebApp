import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { UploadPostComponent } from './upload-post/upload-post.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: 'Upload', component: UploadPostComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Signup', component: SignUpComponent },
  { path: '', component: SignInComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
