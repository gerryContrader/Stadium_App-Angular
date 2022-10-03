import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { UserDTO } from 'src/models/userdto';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  ciao:String = "ciao"
  public users: UserDTO = new UserDTO();
  constructor(public service: UserService,private router: Router, private actRoute: ActivatedRoute,) { }
  public  userid:number;
  user!:UserDTO;

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('currentUser') as string);

  }

}
