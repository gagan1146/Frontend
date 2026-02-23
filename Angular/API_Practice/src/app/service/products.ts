import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Products {
  url:string = "https://dummyjson.com/products";
  constructor(private httpClient:HttpClient){}
  getProductList():Observable<Products[]>{
    return this.httpClient.get<Products[]>(this.url);
  }
}
