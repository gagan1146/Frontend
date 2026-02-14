import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-create',
  imports: [],
  templateUrl: './observable-create.html',
  styleUrl: './observable-create.css',
})
export class ObservableCreate {

    myObervable = Observable.create((observer:any)=>{
    console.log(`Observable Starts`);
    // observer.next("1");
    // observer.next("2");
    // observer.next("3");
    // observer.next("4");
    // observer.next("5");
    // observer.next("6");
    setTimeout(()=>{observer.next("1");},1000);
    setTimeout(()=>{observer.next("2");},2000);
    setTimeout(()=>{observer.next("3");},3000);
    setTimeout(()=>{observer.next("4");},4000);
    // setTimeout(()=>{observer.error(new Error(`Something went wrong! Please try again Later.`));},4000);
    setTimeout(()=>{observer.next("5");},5000);
    setTimeout(()=>{observer.next("6");},6000);
    observer.next("outside setTimeOut Data");
    setTimeout(()=>{observer.complete();},6000);
    // observer.complete(); // after executing this line none of the remaining observables execute..
  });
  ngOnInit(){
    console.log(`Inside ngOnInit method`);
    this.myObervable.subscribe((val:any)=>{
      console.log(val);
    },(error:any)=>{
      alert(error);
    },()=>{
      alert(`Observable Tasks are completed.....`);
      
    });
  }
}
