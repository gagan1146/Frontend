import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { DynamicStyling } from './dynamic-styling/dynamic-styling';
import { Directives } from './directives/directives';
import { Parent } from './parent/parent';
import { InputBinding } from './input-binding/input-binding';
import { OutputBinding } from './output-binding/output-binding';
import { ParentOfBothBinding } from './parent-of-both-binding/parent-of-both-binding';

@Component({
  selector: 'app-root',
  imports: [FormsModule, DynamicStyling, Directives, RouterOutlet, Parent, InputBinding, OutputBinding],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('angular-practice');
  name: string = "Default value";

  handleNotification(message: string) {
    console.log(message);
  }
}
