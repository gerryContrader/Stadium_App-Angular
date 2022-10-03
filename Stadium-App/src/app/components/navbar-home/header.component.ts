import { Component,Input, EventEmitter, OnInit, Output } from '@angular/core';
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
  searchword:string = '';
  event: EventDTO[];
  message:HTMLInputElement;
  public user!: UserDTO;
  constructor(private service: EventService) { }

  ngOnInit(): void {
    this.getEvents();
    this.user = JSON.parse(localStorage.getItem('currentUser') as string);

  }


  getEvents() {
    this.service.getAll().subscribe(event => {
      this.event = event
    });
  }



}
