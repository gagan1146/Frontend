import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  isLoggedIn = false; 
  dropdownOpen = false; 
  toggleDropdown() { 
    this.dropdownOpen=!this.dropdownOpen;
  } 
  login() {
    console.log('Login clicked'); 
  } 
  signup() { 
    console.log('Signup clicked'); 
  } logout() { 
    this.isLoggedIn = false; 
    console.log('Logged out'); 
  } 
  goToProfile() { 
    console.log('Profile clicked'); 
  }
}