import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../service/user';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.html',
  styleUrls: ['./signup.css'],
})
export class Signup {
  name: string = "";
  email: string = "";
  password: string = "";

  constructor(private router: Router, private user: User) {}

  passData() {
    this.user.setName(this.name);
    this.user.setEmail(this.email);
    this.user.setPassword(this.password);
    this.router.navigate(['profile']);
  }
}
