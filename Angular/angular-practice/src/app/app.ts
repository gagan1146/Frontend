import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DynamicStyling } from './dynamic-styling/dynamic-styling';
import { Directives } from './directives/directives';
import { Parent } from './parent/parent';

@Component({
  selector: 'app-root',
  imports: [FormsModule,DynamicStyling,Directives,RouterOutlet,RouterLink,Parent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('angular-practice');
  name:string = "Default value";
}
