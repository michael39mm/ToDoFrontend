import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Eventt } from '../Eventt';
import { CommonModule } from '@angular/common';
import { Eventt2 } from '../Eventt2';
import { EventService } from '../eventService';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-select-event',
  imports: [FormsModule,CommonModule,RouterLink],
  standalone:true,
  templateUrl: './select-event.html',
  styleUrl: './select-event.css'
})
export class SelectEvent {
  private eventService = inject(EventService);
  DateTime: string = '';
  private http = inject(HttpClient);

onSelectionChoice(event: Event) {
  const input = event.target as HTMLInputElement;
  this.DateTime = input.value;
  console.log('Selected DateTime as string:', this.DateTime);
  
}
events2:Eventt2[] = []
ngOnInit(): void {
  this.eventService.getEvents().subscribe(data => {
    this.events2 = data;
  });
}

eventTitle: string = '';
  submitName(){
    this.eventTitle = this.eventTitle
    console.log("Name Typed is" , this.eventTitle);
  }
  
  selectedEventTypeId: string = '';
  onEventTypeChange(event:Event){
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedEventTypeId = selectedValue;
    console.log('Selected Event Type ID:', this.selectedEventTypeId);
  }
  events:Eventt[] = [];
  SubmitEvent() {
  const newEvent: Eventt = {
    Name: this.eventTitle,
    Datetime: this.DateTime,
    EventTypeId: parseInt(this.selectedEventTypeId), 
    Completed:false
  };
  this.eventService.postEvent(newEvent).subscribe(data => {
  this.events2 = data;
});
  this.DateTime = '';
  this.eventTitle = '';
  this.selectedEventTypeId = '';

}
DeleteEvent(id:number){
  this.eventService.deleteEvent(id).subscribe(data => {
  this.events2 = data;
});
}
cancelEditing(){
  this.editingEventId = null;
}
saveUpdatedEvent(id:number){
  const newEvent: Eventt = {
    Name: this.editableName,
    Datetime: this.editableDateTime,
    EventTypeId: parseInt(this.editableTypeId), 
    Completed:false
  };
  this.eventService.updateEvent(id,newEvent).subscribe(data => {
  this.events2 = data;
});
this.editingEventId = null;
  this.editableName = '';
  this.editableDateTime = '';
  this.editableTypeId = '';
  }
  editingEventId:number |null = null;
  cLickedUpdate(id:number){
    this.editingEventId = id;
  }
  editableName:string = '';
  editableDateTime:string = '';
  editableTypeId:string = '';
  getEventTypeIdByName(name: string): number {
  switch (name) {
    case 'Meeting': return 1;
    case 'Call': return 2;
    case 'Sports': return 3;
    case 'Family': return 4;
    default:
      return 1;
  }
}
  CompletedEvent(id:number){
   const eventTemp = this.events2.find(e => e.id === id);
   if (!eventTemp) return;
   const newEvent: Eventt = {
   Name: eventTemp.name,
   Datetime: eventTemp.datetime,
   EventTypeId: this.getEventTypeIdByName(eventTemp.eventType),
   Completed: true
  };
    this.eventService.updateEvent(id,newEvent).subscribe(data=>this.events2 = data)
  }

} 