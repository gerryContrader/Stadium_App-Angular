import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { EventDTO } from 'src/models/eventdto';

import { UserDTO } from 'src/models/userdto';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  constructor(private service: EventService) { }

  event!: EventDTO;

  user!:UserDTO;

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('currentUser') as string);

    this.service.eventRead(this.event.id).subscribe(event => {
      this.event = event
    })
  }

}
