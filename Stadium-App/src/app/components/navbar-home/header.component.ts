import { Component,Input, EventEmitter, OnInit, Output } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { EventDTO } from 'src/models/eventdto';

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

  constructor(private service: EventService) { }

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.service.getAll().subscribe(event => {
      this.event = event
    });
  }



}
