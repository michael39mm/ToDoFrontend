import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';

@Component({
  selector: 'app-when',
  imports: [FormsModule],
  templateUrl: './when.html',
  styleUrl: './when.css'
})
export class When {
  DateTime: string = '';

onSelectionChoice(event: Event) {
  const input = event.target as HTMLInputElement;
  this.DateTime = input.value;
  console.log('Selected DateTime as string:', this.DateTime);
}
}
