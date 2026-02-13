import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { User } from '../service/user';

interface Person { name: string; id: number; }

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  
  users:Person[]=[
    {name:"peter",id:1},
    {name:"alice",id:2},
    {name:"bob",id:3},
  ];
  name:string="";
  constructor(private user:User){
      this.name = user.getName();
  }
}
