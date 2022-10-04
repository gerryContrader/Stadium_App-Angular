import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/models/userdto';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public user!: UserDTO;
  public role!: number;
  public propicSrc!: string;

  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('currentUser') as string);
    this.propicSrc = "data:image/png;base64,"+ this.user.propic;
    if (this.user.usertype === "USER") {
      this.role = 2;
    } else if (this.user.usertype === "ADMIN") {
      this.role = 1;
    }
    else {
      this.role = 0;
    }
  }

}
