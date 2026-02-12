import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

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
}
