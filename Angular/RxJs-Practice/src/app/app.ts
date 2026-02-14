import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { from, Observable, of } from 'rxjs';
import { ObservableConstructor } from './observable-constructor/observable-constructor';
import { ObservableCreate } from './observable-create/observable-create';
import { ObservableFrom } from './observable-from/observable-from';
import { ObservableOf } from './observable-of/observable-of';
import { ObservableOperators } from './observable-operators/observable-operators';

@Component({
  selector: 'app-root',
  imports: [ObservableConstructor,ObservableCreate,ObservableFrom,ObservableOf,ObservableOperators],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('RxJs-Practice');
  // myObervable = Observable.create((observer:any)=>{
  //   console.log(`Observable Starts`);
  //   // observer.next("1");
  //   // observer.next("2");
  //   // observer.next("3");
  //   // observer.next("4");
  //   // observer.next("5");
  //   // observer.next("6");
  //   setTimeout(()=>{observer.next("1");},1000);
  //   setTimeout(()=>{observer.next("2");},2000);
  //   setTimeout(()=>{observer.next("3");},3000);
  //   setTimeout(()=>{observer.next("4");},4000);
  //   // setTimeout(()=>{observer.error(new Error(`Something went wrong! Please try again Later.`));},4000);
  //   setTimeout(()=>{observer.next("5");},5000);
  //   setTimeout(()=>{observer.next("6");},6000);
  //   observer.next("outside setTimeOut Data");
  //   setTimeout(()=>{observer.complete();},6000);
  //   // observer.complete(); // after executing this line none of the remaining observables execute..
  // });
  // myObervable = new Observable((observer)=>{
  //   console.log(`Observable Starts`);
  //   // observer.next("1");
  //   // observer.next("2");
  //   // observer.next("3");
  //   // observer.next("4");
  //   // observer.next("5");
  //   // observer.next("6");
  //   setTimeout(()=>{observer.next("1");},1000);
  //   setTimeout(()=>{observer.next("2");},2000);
  //   setTimeout(()=>{observer.next("3");},3000);
  //   setTimeout(()=>{observer.next("4");},4000);
  //   // setTimeout(()=>{observer.error(new Error(`Something went wrong! Please try again Later.`));},4000);
  //   setTimeout(()=>{observer.next("5");},5000);
  //   setTimeout(()=>{observer.next("6");},6000);
  //   observer.next("outside setTimeOut Data");
  //   setTimeout(()=>{observer.complete();},6000);
  //   // observer.complete(); // after executing this line none of the remaining observables execute..
  // });
  // array1:number[]=[1,2,3,4,5,6];
  // array2:string[]=['A','B','C'];
  // // myObervable = of(this.array1,this.array2);
  // myObervable = from(this.array1);
  // ngOnInit(){
  //   console.log(`Inside ngOnInit method`);
  //   this.myObervable.subscribe((val)=>{
  //     console.log(val);
  //   },(error)=>{
  //     alert(error);
  //   },()=>{
  //     alert(`Observable Tasks are completed.....`);
      
  //   });
  // }
}
