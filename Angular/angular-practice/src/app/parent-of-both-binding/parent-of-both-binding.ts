import { Component } from '@angular/core';
import { InputBinding } from '../input-binding/input-binding';

@Component({
  selector: 'app-parent-of-both-binding',
  imports: [InputBinding],
  templateUrl: './parent-of-both-binding.html',
  styleUrl: './parent-of-both-binding.css',
})
export class ParentOfBothBinding {
  handleNotification(message: string) { 
    console.log(message);
  }
}
