import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Page404Component } from './components/page404/page404.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  { path: 'home', component:HomeComponent},
  { path:'login', component: LoginComponent },
  { path:'404', component: Page404Component },
  { path:'register', component: RegisterComponent },

  { path: '**', redirectTo:'/404', pathMatch: 'full' },



  { path: '', redirectTo:'/login', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
