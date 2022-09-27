import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  public username!: string;
  public password!: string;

  constructor() {}

  
  public handleSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }
  }

  public ngOnInit(): void {
  }

}