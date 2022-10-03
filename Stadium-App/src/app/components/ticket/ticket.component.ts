import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';
import { EventDTO } from 'src/models/eventdto';
import { TicketDTO } from 'src/models/ticketdto';
import { UserDTO } from 'src/models/userdto';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
ticket: TicketDTO[]
public event!: EventDTO[];
tickettoinsert = new TicketDTO();
public user!: UserDTO;
  constructor(private service: TicketService) { }

  ngOnInit(): void {

    this.user = JSON.parse(localStorage.getItem('currentUser') as string);
    if(this.user.usertype === "USER"){
      this.service.getAllByUserId(this.user.id).subscribe(ticket => {
        this.ticket = ticket ;

      });
    }
    else{

     this.getTicket()
    }

  }
  getTicket() {
    this.service.getAll().subscribe(ticket => this.ticket = ticket);
  }

  deleteTicket(ticket: TicketDTO){
    this.service.delete(ticket.id).subscribe(() => this.getTicket());
  }


  update(ticket:TicketDTO) {
    this.service.update(ticket).subscribe(() => this.getTicket());
  }

  insert(ticket:TicketDTO) {
    this.service.insert(ticket).subscribe(() => this.getTicket());
  }

  clear(){
    this.tickettoinsert = new TicketDTO();
  }

}
