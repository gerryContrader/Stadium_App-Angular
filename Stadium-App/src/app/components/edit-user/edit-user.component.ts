import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { UserService } from 'src/app/services/user.service';
import { EventDTO } from 'src/models/eventdto';

import { UserDTO } from 'src/models/userdto';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private router: Router, private actRoute: ActivatedRoute, private service: UserService) { }
  public id:number;
  public username:string;
  public password:string;
  public usertype:string;
  public address:string;
  public email:string;
  public phone_number:string;
  public name:string;
  public surname:string;
  public user: UserDTO = new UserDTO();

  ngOnInit(): void {
    this.id = this.actRoute.snapshot.params['id'];
    this.service.userRead(this.id).subscribe(x => {
      this.user = x
    })
  }
  public handleSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    } else {

      this.service.editUser(this.user).subscribe(() => {
        this.router.navigate(['users'])
      })
    }

  }

}
