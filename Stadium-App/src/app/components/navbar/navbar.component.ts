import { Component, OnInit } from '@angular/core';
import { UserDTO } from 'src/models/userdto';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
user!: UserDTO[];
  constructor() { }

  ngOnInit(): void {
  }

}
