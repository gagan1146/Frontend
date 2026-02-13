import { Component, OnInit } from '@angular/core';
import { User } from '../service/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrls: ['./profile.css'],
})
export class Profile implements OnInit {
  name: string = "";
  email: string = "";
  password: string = "";

  constructor(private user: User) {}

  ngOnInit() {
    this.name = this.user.getName();
    this.email = this.user.getEmail();
    this.password = this.user.getPassword();
  }
}
