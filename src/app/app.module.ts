import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UploadPostComponent } from './upload-post/upload-post.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    UploadPostComponent,
    HomeComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,AppRoutingModule, HttpClientModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
