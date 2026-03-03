import { NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [NgIf,NgSwitch,NgSwitchCase,NgSwitchDefault],
  templateUrl: './directives.html',
  styleUrl: './directives.css',
})
export class Directives {
  login=true
  toggleFunctionality(){
    this.login=!this.login;
  }
  block=0
  toggleHeading(){
    this.block=(this.block+1)%5;
  }
  // items:number[]=[1,2,3,4,5,6,7];
}
