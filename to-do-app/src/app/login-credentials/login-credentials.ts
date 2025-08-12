import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { EventService } from '../eventService';
import { LoginService } from '../loginService';
import { LoginType } from '../loginType';

@Component({
  selector: 'app-login-credentials',
  imports: [FormsModule,CommonModule,RouterLink],
  templateUrl: './login-credentials.html',
  styleUrl: './login-credentials.css'
})
export class LoginCredentials {
  private loginService = inject(LoginService);
  private router = inject(Router);
  email:string = ''; 
  password:string = '';
  role:string = '';
  roleId:number = 0;
  submitCredentials() {
    const loginDto: LoginType = {
      Email: this.email,
      Password: this.password,
      Role: this.role
    };

    this.loginService.login(loginDto).subscribe({
      next: () => {
        this.router.navigate(['/SelectEvent']); // ✅ Only after successful login
      },
      error: err => {
        console.error('Login failed:', err);
        alert('Invalid login');
      }
    });
  }


}
