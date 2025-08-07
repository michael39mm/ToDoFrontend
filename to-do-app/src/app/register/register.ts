import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../loginService';
import { LoginType } from '../loginType';

@Component({
  selector: 'app-register',
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './register.html',
  styleUrl: './register.css'
})
export class Register {
  email:string = '';
  private http = inject(HttpClient);
  private router = inject(Router);
  private logService = inject(LoginService);
  password:string ='';
  register() {
    const loginDto: LoginType = {
          Email: this.email,
          Password: this.password
        };
    this.logService.register(loginDto)
      .subscribe({
        next: () => {
          this.router.navigate(['SelectEvent']);
        },
        error: (err) => {
          console.error('Registration failed:', err);
          alert('Registration failed. Please try again.');
        }
      });
  }
}
