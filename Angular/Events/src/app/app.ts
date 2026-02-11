import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EventPractice } from './event-practice/event-practice';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,EventPractice],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Events');
}
