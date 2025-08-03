import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Formm } from './formm/formm';
import { Checklist } from './checklist/checklist';
import { When } from './when/when';
import { NameEvent } from './name-event/name-event';
import { FormsModule } from '@angular/forms';
import { SelectEvent } from './select-event/select-event';



@Component({
  selector: 'app-root',
  imports: [Header,Formm,Checklist,When,NameEvent,FormsModule,SelectEvent,RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
