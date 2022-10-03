import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserDTO } from 'src/models/userdto';

@Component({
  selector: 'app-info-profile',
  templateUrl: './info-profile.component.html',
  styleUrls: ['./info-profile.component.css']
})
export class InfoProfileComponent implements OnInit {

  public users: UserDTO = new UserDTO();
  constructor(public service: UserService,private router: Router, private actRoute: ActivatedRoute,) { }
  public  userid:number;
  user!:UserDTO[];
  public id!: number;
  public username!: string;
  public usertype!: string;
  public password!: string;
  public address!: string;
  public phone_number!: string;
  public email!: string;
  public name!: string;
  public surname!: string;

  ngOnInit(): void {
    this.userid = this.actRoute.snapshot.params['id'];
    this.service.userRead(this.userid).subscribe(user => {
      this.users = user

    this.service.read(this.userid);
    })

  }
  public handleSubmit(form: NgForm): void {
    if (form.invalid) {
      return;
    } else {
      console.log(this.users);
      this.service.editUser(this.users).subscribe(() => {
        this.router.navigate(['users'])
      })
    }

  }
}


