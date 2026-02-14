import { Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-observable-from',
  imports: [],
  templateUrl: './observable-from.html',
  styleUrl: './observable-from.css',
})
export class ObservableFrom {
  array1:number[]=[1,2,3,4,5,6];
  array2:string[]=['A','B','C'];
  myObervable = of(this.array1,this.array2);
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
