import { Component, Input, EventEmitter, OnInit, Output } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { EventDTO } from 'src/models/eventdto';
import { UserDTO } from 'src/models/userdto';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() searchcriteria = new EventEmitter<String>();
  searchword: string = '';
  event: EventDTO[];
  message: HTMLInputElement;


  public user!: UserDTO;
  public role!: number;
  public propicSrc!: string;

  constructor(private service: EventService) { }

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
    this.getEvents();

  }


  getEvents() {
    this.service.getAll().subscribe(event => {
      this.event = event
    });
  }



}
