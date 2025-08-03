import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-name-event',
  imports: [FormsModule],
  templateUrl: './name-event.html',
  styleUrl: './name-event.css'
})
export class NameEvent {
  eventTitle: string = '';
  submitName(){
    this.eventTitle = this.eventTitle
    console.log("Name Typed is" , this.eventTitle);
  }

}
