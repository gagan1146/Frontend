import { Component } from '@angular/core';
import { User } from '../service/user';

@Component({
  selector: 'app-signup',
  imports: [],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  username = '';
  email = '';
  password = '';
  constructor(private userService: User) {}
  onSignup() {
    this.userService.signup({
      name: this.username,
      email: this.email,
      password: this.password,
    });
    alert('Signup successful!');
  }
}
