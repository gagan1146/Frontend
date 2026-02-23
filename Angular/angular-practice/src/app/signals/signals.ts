import { Component, numberAttribute, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-signals',
  imports: [FormsModule],
  templateUrl: './signals.html',
  styleUrl: './signals.css',
})
export class Signals {
  title="";
  count = signal<any>(0);
  flag:Boolean =true;
   private timerId: any = null;
  
  start() {
    if (this.timerId) return;           
    this.flag = false;
    this.timerId = setInterval(() => {
      this.count.update((c: number)=> c + 1);
    }, 1000);
  }

 stop() {
    this.flag = true;
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }
  
  toggle() {
    this.flag ? this.start() : this.stop();
  }

  reset() {
    this.count.set(0);
  }


  }
  
