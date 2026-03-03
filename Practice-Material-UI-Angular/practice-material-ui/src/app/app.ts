import { Component, signal } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterOutlet } from '@angular/router';
import { MyTel } from './my-tel/my-tel';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatSlideToggleModule,MyTel],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('practice-material-ui');
}
