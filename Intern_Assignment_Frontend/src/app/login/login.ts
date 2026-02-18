import { Component } from '@angular/core';
import { User } from '../service/user';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';
  constructor(private userService: User) {}
  onLogin() {
    const success = this.userService.login(this.email, this.password);
    if (success) {
      alert('Login successful!');
    } else {
      alert('Invalid credentials');
    }
  }
}
