import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('To-Do-App');
  task:string = "";
  taskList:string[]=[];
  addTask(){
    if(this.task.length>0){
      this.taskList.push(this.task);
      this.task="";
    }
  }
  removeAtIndexImmutable(arr:string[], index:number) {
    if (index < 0 || index >= arr.length) return [...arr];
    return [...arr.slice(0, index), ...arr.slice(index + 1)];
  }
  deleteTask(n:number){
    this.taskList=this.removeAtIndexImmutable(this.taskList, n);
  }
}
