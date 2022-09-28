import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgForm } from '@angular/forms';
import { ForbiddenDirective } from './directives/forbidden.directive';
import { HeaderComponent } from './components/header/header.component';
import { UsersComponent } from './components/users/users.component';
import { UserpageComponent } from './components/users/userpage/userpage.component';
import { FooterComponent } from './components/footer/footer.component';
import { Page404Component } from './components/page404/page404.component';
<<<<<<< HEAD
import { ProfileComponent } from './components/profile/profile.component';
=======
import { RegisterComponent } from './components/register/register.component';
>>>>>>> 69e5a29a3fc64f6d5e40874177db05f958bd3407


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    ForbiddenDirective,
    UsersComponent,
    UserpageComponent,
    FooterComponent,
    Page404Component,
<<<<<<< HEAD
    ProfileComponent,
=======
    RegisterComponent,
>>>>>>> 69e5a29a3fc64f6d5e40874177db05f958bd3407

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
