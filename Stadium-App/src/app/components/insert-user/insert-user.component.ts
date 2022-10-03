import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EventService } from 'src/app/services/event.service';
import { UserService } from 'src/app/services/user.service';
import { EventDTO } from 'src/models/eventdto';
import { UserDTO } from 'src/models/userdto';

@Component({
  selector: 'app-insert-user',
  templateUrl: './insert-user.component.html',
  styleUrls: ['./insert-user.component.css']
})
export class InsertUserComponent implements OnInit {

  constructor(private router: Router, private service: UserService) { }
  public user: UserDTO = new UserDTO();
  public username:string;
  public password:string;
  public usertype:string;
  public address:string;
  public email:string;
  public phone_number:string;
  public name:string;
  public surname:string;

  ngOnInit(): void {
  }

  public handleSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    } else {
          this.service.insert(this.user).subscribe(() => {
            this.router.navigate(['users']);
          })
      }
    }

}
