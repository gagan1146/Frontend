import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-output-binding',
  imports: [CommonModule],
  templateUrl: './output-binding.html',
  styleUrls: ['./output-binding.css']
})
export class OutputBinding {
  @Output() notify = new EventEmitter<string>();

  sendMessage() {
    this.notify.emit('Hello Parent, from Child!');
  }
}