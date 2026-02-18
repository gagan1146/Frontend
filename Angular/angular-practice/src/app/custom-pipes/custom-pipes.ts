import { Component } from '@angular/core';
import { UpperCasePipe } from './upper-case-pipe';
import { LowerCasePipe } from './lower-case-pipe';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-custom-pipes',
  standalone: true,
  imports: [UpperCasePipe, LowerCasePipe, DatePipe],
  templateUrl: './custom-pipes.html',
  styleUrls: ['./custom-pipes.css'],
})
export class CustomPipes {
  name: string = "john cena";
  gmail: string = "HELLO@GMAIL.COM";
  dob: Date = new Date(2000, 9, 10);

  constructor(
    private upperCasePipe: UpperCasePipe,
    private lowerCasePipe: LowerCasePipe,
    private datePipe: DatePipe
  ) { }

  applyPipeOnNameUpper() {
    this.name = this.upperCasePipe.transform(this.name);
  }

  applyPipeOnNameLower() {
    this.name = this.lowerCasePipe.transform(this.name);
  }

  applyPipeOnGmailUpper() {
    this.gmail = this.upperCasePipe.transform(this.gmail);
  }

  applyPipeOnGmailLower() {
    this.gmail = this.lowerCasePipe.transform(this.gmail);
  }

  applyPipeOnDOB() {
    this.dob = this.datePipe.transform(this.dob, 'longDate') as any;
  }
}
