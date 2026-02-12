import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.css',
})
export class Profile {
  name:string=""
  id:number|null=null
  constructor(private route:ActivatedRoute){}
  ngOnInit(){
    this.route.queryParams.subscribe(param=>{this.name=param['name']}
    );
    this.route.params.subscribe(params => { this.id = +params['id']; 
      this.name = params['name']; 
    });
  }
}
