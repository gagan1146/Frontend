import { Component } from '@angular/core';
import { MainService } from '../service/main-service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
  providers:[MainService]
})
export class Home {
  type:string="monthly";
    constructor(private mainSubscribe:MainService){
      this.mainSubscribe = mainSubscribe;
    }
    subscribing(){
      this.mainSubscribe.onSubscribe(this.type);
    }
}
