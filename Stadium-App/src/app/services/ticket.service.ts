import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EventDTO } from 'src/models/eventdto';
import { TicketDTO } from 'src/models/ticketdto';
import { AbstractService } from './abstract.service';

@Injectable({
  providedIn: 'root'
})
export class TicketService extends AbstractService<TicketDTO>  {

  constructor(http: HttpClient) {
    super(http);
    this.type = 'ticket';}


    public createTicket(ticketDTO: TicketDTO): Observable<TicketDTO> {
      return this.http.post<TicketDTO>(environment.APIEndpoint + this.type + '/insert', ticketDTO)
    }

    public TicketRead(id: number): Observable<TicketDTO> {
      return this.http.get<TicketDTO>(environment.APIEndpoint + this.type + "/read?id=" + id)
    }

    public editTicket(ticketDTO: TicketDTO): Observable<TicketDTO> {
      return this.http.put<TicketDTO>(environment.APIEndpoint + this.type + "/update", ticketDTO)
    }

    public getAllByUserId(id: number): Observable<TicketDTO[]> {
      return this.http.get<TicketDTO[]>(environment.APIEndpoint + this.type + "/getmine?id=" + id)
    }

    public deleteTicket(id: number):Observable <TicketDTO[]>{
      return this.http.delete<TicketDTO[]>(environment.APIEndpoint+this.type+"/deleteticket?id="+id);
    }
}
