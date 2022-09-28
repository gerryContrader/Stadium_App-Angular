import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';

import { ProfileComponent } from './components/profile/profile.component';

import { RegisterComponent } from './components/register/register.component';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
  { path: 'profile', component:ProfileComponent},
  { path: 'home', component:HomeComponent},
  { path:'login', component: LoginComponent },
  { path:'404', component: Page404Component },
  { path:'register', component: RegisterComponent },
  { path:'users', component: UsersComponent },
  // { path: '**', redirectTo:'/404', pathMatch: 'full' },
  { path: '', redirectTo:'/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
