import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  onSubscribe(type:string){
    alert(`Thank you for your ${type} subscription`);
  }
}
