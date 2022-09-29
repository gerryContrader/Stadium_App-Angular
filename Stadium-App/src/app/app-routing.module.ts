import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { HomeComponent } from './components/home/home.component';
import { InsertEventComponent } from './components/insert-event/insert-event.component';
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
  { path: 'edit-event/:id', component: EditEventComponent},
  {path: 'insert-event', component:InsertEventComponent},
  // { path: '**', redirectTo:'/404', pathMatch: 'full' },
  { path: '', redirectTo:'/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
