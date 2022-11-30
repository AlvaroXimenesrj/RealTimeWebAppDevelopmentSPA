import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './_shared/main/main.component';
import { NavBarComponent } from './_shared/nav-bar/nav-bar.component';
import { HomeComponent } from './_shared/home/home.component';
import { FooterComponent } from './_shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MainComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
