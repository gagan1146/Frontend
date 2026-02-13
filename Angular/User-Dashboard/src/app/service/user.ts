import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class User {
  private name: string = "";
  private email: string = "";
  private password: string = "";

  setName(name: string) {
    this.name = name;
  }

  setEmail(email: string) {
    this.email = email;
  }

  setPassword(password: string) {
    this.password = password;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email;
  }

  getPassword(): string {
    return this.password;
  }
}
