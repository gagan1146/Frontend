import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [FormsModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  name:string="";
  email:string="";
  password:string="";
  constructor(private router:Router){}
  passData(){
    this.router.navigate(['profile'],{queryParams:{
      name:this.name,email:this.email,password:this.password
    }});
  }
}
