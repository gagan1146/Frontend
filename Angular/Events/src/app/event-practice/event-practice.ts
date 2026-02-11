import { Component } from '@angular/core';

@Component({
  selector: 'app-event-practice',
  imports: [],
  templateUrl: './event-practice.html',
  styleUrl: './event-practice.css',
})
export class EventPractice {
  username:string="";
  email:string="";
  getName(event:Event){
    this.username = (event.target as HTMLInputElement).value;
  }
  getEmail(event:Event){
    this.email = (event.target as HTMLInputElement).value;
  }
  setName(name:string){
    this.username = name;
  }
  setEmail(email:string){
    this.email = email;
  }
}
