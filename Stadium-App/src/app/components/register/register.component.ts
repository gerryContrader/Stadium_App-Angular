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
  public users: UserDTO[];

  usertoinsert: UserDTO = new UserDTO();
  constructor(private router: Router, private service: UserService) { }

  ngOnInit(): void {
  }

  public handleSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    }else{
      console.log(this.usertoinsert.usertype);
      console.log(this.usertoinsert);
        this.service.createUser(this.usertoinsert).subscribe(() =>
          this.router.navigate(['/login'])
        );
      // 
    }
  }

}
