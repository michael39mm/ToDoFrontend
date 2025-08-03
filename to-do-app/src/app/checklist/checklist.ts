import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-checklist',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './checklist.html',
  styleUrl: './checklist.css'
})
export class Checklist {
  selectedEventTypeId: string = '';
  onEventTypeChange(event:Event){
    const selectedValue = (event.target as HTMLSelectElement).value;
    this.selectedEventTypeId = selectedValue;
    console.log('Selected Event Type ID:', this.selectedEventTypeId);
  }
 
}
