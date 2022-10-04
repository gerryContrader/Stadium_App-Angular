import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { TicketService } from 'src/app/services/ticket.service';
import { UserDTO } from 'src/models/userdto';
import { TicketDTO } from 'src/models/ticketdto';
import { FavouriteDTO } from 'src/models/favouritedto';
import { FavouriteService } from 'src/app/services/favourite.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  ciao:String = "ciao"
  public tickets!: TicketDTO[];
  public favourites!: FavouriteDTO[];

  public users: UserDTO = new UserDTO();
  constructor(public service: UserService, public favouriteService:FavouriteService, public ticketService:TicketService, private router: Router, private actRoute: ActivatedRoute,) { }
  public  userid:number;
  user!:UserDTO;
  propicSrc!:String;
  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('currentUser') as string);
    this.propicSrc = "data:image/png;base64,"+ this.user.propic;
    this.ticketService.getAllByUserId(this.user.id).subscribe(x => {

      this.tickets = x;

    });
    this.favouriteService.getAllByUserId(this.user.id).subscribe(x =>{
      this.favourites = x;
    })
  }

  deleteFavourite(favourite: FavouriteDTO){
    this.favouriteService.delete(favourite.id).subscribe(() => {
      this.favouriteService.getAllByUserId(this.user.id).subscribe(x =>{
        this.favourites = x;
      })
    });
  }

  deleteTicket(ticket:TicketDTO){
    this.ticketService.deleteTicket(ticket.id).subscribe(()=>{
      this.ticketService.getAllByUserId(this.user.id).subscribe(x =>{
        this.tickets = x;
      })
    })
  }

  updateUser(user: UserDTO) {
    this.service.editUser(this.user).subscribe(() => {
      this.service.read(user.id)
      localStorage.setItem('currentUser', JSON.stringify(this.user));
    })
  }


}
