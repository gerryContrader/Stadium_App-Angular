import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEventComponent } from './components/edit-event/edit-event.component';
import { HomeComponent } from './components/home/home.component';
import { InfoProfileComponent } from './components/info-profile/info-profile.component';
import { InsertEventComponent } from './components/insert-event/insert-event.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';

import { ProfileComponent } from './components/profile/profile.component';

import { RegisterComponent } from './components/register/register.component';
import { TicketComponent } from './components/ticket/ticket.component';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
  { path: 'info-profile/:id', component:InfoProfileComponent},
  { path: 'home', component:HomeComponent},
  { path:'login', component: LoginComponent },
  { path: 'profile', component:ProfileComponent},
  { path:'register', component: RegisterComponent },
  { path:'users', component: UsersComponent },
  { path: 'edit-event', component: EditEventComponent},
  { path: 'ticket', component:TicketComponent},
  { path: 'edit-event/:id', component: EditEventComponent},
  {path: 'insert-event', component:InsertEventComponent},



  { path: '', redirectTo:'/login', pathMatch: 'full' },
  { path:'404', component: Page404Component },
  { path: '**', redirectTo:'/404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
