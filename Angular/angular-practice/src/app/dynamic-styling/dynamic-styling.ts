import { Component } from '@angular/core';

@Component({
  selector: 'app-dynamic-styling',
  imports: [],
  templateUrl: './dynamic-styling.html',
  styleUrl: './dynamic-styling.css',
})
export class DynamicStyling {
  fontSizeSmall="30px"
  fontSizeBig="80px"
  red="red"
  blue="blue"
  black="black"
  yellow="yellow"
  green="green"
  bgcolor=this.red
  changeColor(color:string){
    this.bgcolor=color;
  }
}
