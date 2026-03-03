import { CommonModule } from '@angular/common';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-binding',
  imports: [CommonModule],
  templateUrl: './input-binding.html',
  styleUrl: './input-binding.css',
})
export class InputBinding implements OnInit,OnDestroy {
  @Input() message!:string
  count:number = 0;
  ngOnInit(){
    console.log(this.message);
  }
  ngOnDestroy(){
    console.log("After Destroying " + this.message);
  }

  handleOnClick(){
    this.count+=1
  }
}
