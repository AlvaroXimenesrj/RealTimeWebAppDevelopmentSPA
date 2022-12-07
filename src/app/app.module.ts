import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './_shared/main/main.component';
import { NavBarComponent } from './_shared/nav-bar/nav-bar.component';
import { HomeComponent } from './_shared/home/home.component';
import { FooterComponent } from './_shared/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './_shared/material/material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ForgotComponent } from './forgot/forgot.component';
import { ResetPasswordConfirmationComponent } from './login/ResetPasswordConfirmation/reset-password-confirmation.component';
import { ResetPasswordComponent } from './login/ResetPassword/reset-password.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    LoginComponent,
    ForgotComponent,
    ResetPasswordConfirmationComponent,
    ResetPasswordComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    //FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
