import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public username!: string;
  public password!: string;
  public email!: string;
  public name!: string;
  public surname!: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public handleSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }else{
      this.router.navigate(['/home']);

    }
  }

}
