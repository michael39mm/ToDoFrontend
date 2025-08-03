import { CommonModule } from '@angular/common';
import { Component, EventEmitter, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formm',
  imports: [FormsModule,CommonModule ],
  templateUrl: './formm.html',
  styleUrl: './formm.css'
})
export class Formm {
  hobby:string = ''
   hobbies: string[] = [];
  submitHobby(){
    const trimmed = this.hobby.trim();
    if (trimmed) {
      this.hobbies.push(trimmed);
      this.hobby = '';    
  }

  }
  done(h:string)
  {
    
    for(let i = 0;i<this.hobbies.length;i++)
    {
      if (this.hobbies[i] == h){
        this.hobbies.splice(i,1);
        return;
      }


    }
  }

  

}
