import { Component } from '@angular/core';
import { filter, from, map } from 'rxjs';

@Component({
  selector: 'app-observable-operators',
  standalone: true,
  imports: [],
  templateUrl: './observable-operators.html',
  styleUrls: ['./observable-operators.css'],
})
export class ObservableOperators {
  array1: number[] = [1, 2, 3, 4, 5, 6];

  myObservable = from(this.array1);
  myMapObservable = this.myObservable.pipe(
    map(val => {return val * 5})
  );
  myFilterObservable = this.myMapObservable.pipe(
    filter(val => val >=25)
  );

  ngOnInit() {
    console.log('Inside ngOnInit method');
    // this.myMapObservable.subscribe(
    //   val => console.log(val),
    //   error => alert(error),
    //   () => alert('Observable Tasks are completed.....')
    // );
    // this.myMapObservable.subscribe(
    //   val => console.log(val),
    //   error => alert(error),
    //   () => alert('Observable Tasks are completed.....')
    // );
    this.myFilterObservable.subscribe(
      val => console.log(val),
      error => alert(error),
      () => alert('Observable Tasks are completed.....')
    );
  }
}