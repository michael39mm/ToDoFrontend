import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { tap } from "rxjs";
import { LoginType } from "./loginType";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private http = inject(HttpClient);
  login(temp:LoginType){
    return this.http.post<{token:string}>('http://localhost:5135/login',temp).pipe(tap(response =>{
          localStorage.setItem('token',response.token);
        }))
  }
  register(temp:LoginType){
    return this.http.post<any>('http://localhost:5135/loginn',temp)
  }
  
}