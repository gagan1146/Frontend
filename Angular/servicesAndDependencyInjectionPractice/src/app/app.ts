import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { Profile } from './profile/profile';
import { MainService } from './service/main-service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Home,Profile],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers:[MainService]
})
export class App {
  protected readonly title = signal('servicesAndDependencyInjectionPractice');
  type:string="monthly";
    constructor(private mainSubscribe:MainService){
      this.mainSubscribe = mainSubscribe;
    }
    subscribing(){
      this.mainSubscribe.onSubscribe(this.type);
    }
}
