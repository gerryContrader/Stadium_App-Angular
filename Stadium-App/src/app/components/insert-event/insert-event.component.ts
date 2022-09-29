import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EventDTO } from 'src/models/eventdto';
import { UserDTO } from 'src/models/userdto';


@Component({
  selector: 'app-insert-event',
  templateUrl: './insert-event.component.html',
  styleUrls: ['./insert-event.component.css']
})
export class InsertEventComponent implements OnInit {

  constructor() { }

    public eventId: number;
    public event: EventDTO = new EventDTO();
    public user!: UserDTO;
  
    public name!: string;
    public userId!: UserDTO;
    public placesAvailable: number;
    public maxCapacity!: number;
    public stadiumName!: string;
    public eventDate!: Date;
  
    ngOnInit(): void {
      this.user = JSON.parse(localStorage.getItem('currentUser') as string);
    }
    public handleSubmit(form: NgForm): void {
      if (form.invalid) {
        return;
      } else {

      }
  
    }
  }


