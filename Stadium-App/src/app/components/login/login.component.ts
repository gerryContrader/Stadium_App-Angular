import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username!: string;
  public password!: string;

  constructor(private router: Router) {}


  public handleSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }else{
      this.router.navigate(['/home']);

    }
  }

  public ngOnInit(): void {
  }



}
