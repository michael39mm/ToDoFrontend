import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Eventt } from './Eventt';
import { Eventt2 } from './Eventt2';
import { switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private http = inject(HttpClient);

  getEvents(): Observable<Eventt2[]> {
    return this.http.get<Eventt2[]>('http://localhost:5135/events');
  }

  postEvent(newEvent: Eventt) {
    return this.http.post('http://localhost:5135/events', newEvent).pipe(
      switchMap(() => this.getEvents())
    );
  }

  updateEvent(id: number, updatedEvent: Eventt): Observable<Eventt2[]> {
    return this.http.put(`http://localhost:5135/events/${id}`, updatedEvent).pipe(
      switchMap(() => this.getEvents())
    );
  }

  deleteEvent(id: number): Observable<Eventt2[]> {
    return this.http.delete(`http://localhost:5135/events/${id}`).pipe(
      switchMap(() => this.getEvents())
    );
  }
  
}
