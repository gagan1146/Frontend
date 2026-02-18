import { Component } from '@angular/core';
import { UpperCasePipe, DatePipe } from '@angular/common';
import { LowerCasePipe } from '../custom-pipes/lower-case-pipe';
import { CustomPipes } from '../custom-pipes/custom-pipes';

@Component({
  selector: 'app-pipe-practice',
  templateUrl: './pipe-practice.html',
  styleUrls: ['./pipe-practice.css'],
  providers: [UpperCasePipe, DatePipe,LowerCasePipe],
  imports:[CustomPipes]
})
export class PipePractice {
  name: string = "john cena";
  dob: Date = new Date(2000, 9, 10);
  gmail: string = "HELLO@GMAIL.COM";

  constructor(
    private upperCasePipe: UpperCasePipe,
    private datePipe: DatePipe,
    private lowerCasePipe:LowerCasePipe
  ) {}

  applyPipeOnName() {
    this.name = this.upperCasePipe.transform(this.name);
  }

  applyPipeOnDOB() {
    this.dob = this.datePipe.transform(this.dob, 'longDate') as any;
  }

  applyPipeOnGmail() {
    this.gmail = this.lowerCasePipe.transform(this.gmail);
  }
}