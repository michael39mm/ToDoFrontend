import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Formm } from './formm/formm';
import { Checklist } from './checklist/checklist';
import { When } from './when/when';
import { NameEvent } from './name-event/name-event';
import { FormsModule } from '@angular/forms';
import { SelectEvent } from './select-event/select-event';
import { LoginCredentials } from './login-credentials/login-credentials';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EventService } from './eventService';
import { AuthInterceptor } from './auth.interceptor';
import { SignInUp } from './sign-in-up/sign-in-up';



@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header,
    Formm,
    Checklist,
    When,
      SelectEvent,
    LoginCredentials,
    FormsModule,
    HttpClientModule,SignInUp
  ],providers: [
    EventService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
