import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { EventDTO } from 'src/models/eventdto';
import { UserDTO } from 'src/models/userdto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private router: Router, private service: EventService) { }
  
  public user!: UserDTO;
  public event!: EventDTO[];

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') as string);
    this.service.getAll().subscribe(event => {
      console.log(event);
      this.event = event;
    });
  }

  delete(event: EventDTO) {
    this.service.delete(event.id).subscribe(() => this.service.getAll());
  }


}
