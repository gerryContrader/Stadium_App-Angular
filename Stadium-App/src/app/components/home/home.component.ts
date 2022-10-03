import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';
import { FavouriteService } from 'src/app/services/favourite.service';
import { TicketService } from 'src/app/services/ticket.service';
import { UserService } from 'src/app/services/user.service';
import { EventDTO } from 'src/models/eventdto';
import { FavouriteDTO } from 'src/models/favouritedto';
import { TicketDTO } from 'src/models/ticketdto';
import { UserDTO } from 'src/models/userdto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private service: EventService, private ticketService: TicketService, private userService: UserService, private favouriteService:FavouriteService) { }

  public user!: UserDTO;
  public event!: EventDTO[];
  public ticket!: TicketDTO[];



  public singleEvent: EventDTO = new EventDTO();
  public singleUser: UserDTO = new UserDTO();
  public favourite: FavouriteDTO = new FavouriteDTO();
  public singleTicket: TicketDTO = new TicketDTO();

  public x:UserDTO = new UserDTO();

  public role!: number;

  ngOnInit(): void {

    this.user = JSON.parse(localStorage.getItem('currentUser') as string);
    if(this.user.usertype==="USER"){
      this.role = 2;
    }
    else{
      this.role = 0;
    }
    if(this.user.usertype === "ADMIN"){
      this.service.getAllByUserId(this.user.id).subscribe(event => {

        this.event = event;
        console.log(event)

      });
    }
    else{
     this.getEvents()
    }
  }

  getEvents() {
    this.service.getAll().subscribe(event => {
      this.event = event
    });
  }

 /* addFavourites(user: UserDTO, event: EventDTO){
    this.service.addFavourites().subscribe(() => this.service.getAll());
  }*/


  delete(event: EventDTO) {
    this.service.delete(event.id).subscribe(() => this.getEvents());
  }

  buyTicket(i:number) {
    this.service.eventRead(this.event[i].id).subscribe(y=>{
        this.singleTicket.event = y;
    this.userService.userRead(this.user.id).subscribe(y => {
      this.x = y
      this.singleTicket.user = this.x;

        this.ticketService.createTicket(this.singleTicket).subscribe();
        console.log(this.singleTicket);

        })
      });



  }



  addFavourite(i:number){
      this.userService.userRead(this.user.id).subscribe(y => {
      this.x = y
      this.favourite.user = this.x;
      this.service.eventRead(this.event[i].id).subscribe(y=>{
        this.favourite.event = y;
        this.favouriteService.createFavourite(this.favourite).subscribe();
        console.log(this.favourite);
        })
      });


  }






}
