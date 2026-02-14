import { Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-observable-of',
  imports: [],
  templateUrl: './observable-of.html',
  styleUrl: './observable-of.css',
})
export class ObservableOf {
  array1:number[]=[1,2,3,4,5,6];
  array2:string[]=['A','B','C'];
  myObervable = from(this.array1);
  ngOnInit(){
    console.log(`Inside ngOnInit method`);
    this.myObervable.subscribe((val)=>{
      console.log(val);
    },(error)=>{
      alert(error);
    },()=>{
      alert(`Observable Tasks are completed.....`);
      
    });
  }
}
