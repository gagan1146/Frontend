import { Component } from '@angular/core';
import { MainService } from '../service/main-service';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
  providers:[MainService]
})
export class Profile {
  type:string="monthly";
  constructor(private mainSubscribe:MainService){
    this.mainSubscribe = mainSubscribe;
  }
  subscribing(){
    this.mainSubscribe.onSubscribe(this.type);
  }
}
