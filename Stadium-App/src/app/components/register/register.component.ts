import { HttpRequest } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserDTO } from 'src/models/userdto';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public username!: string;
  public password!: string;
  public mail!: string;
  public id!: number;
  public usertype: string;
  public address!: string;
  public phone!: string;
  public name!: string;
  public surname!: string;
  users: UserDTO[];
  usertoinsert: UserDTO = new UserDTO();
  constructor(private router: Router, private service: UserService) { }

  ngOnInit(): void {
  }

  public handleSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }else{
      this.router.navigate(['/login']);
      this.insert(this.usertoinsert);

    }
  }

  getUsers() {
    this.service.getAll().subscribe(users => this.users = users);
  }

  insert(user: UserDTO) {

    this.service.insert(this.usertoinsert).subscribe(() => this.getUsers());
    alert("Registrazione avvenuta con Successo"+ "---BENVENUTO---"+"  "+ this.usertoinsert.username)
  }

}
