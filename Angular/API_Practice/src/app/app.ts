import { ChangeDetectorRef, Component, OnChanges, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Products } from './service/products';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit, OnChanges {
  protected readonly title = signal('API_Practice');
  constructor(private products:Products, private cdRef: ChangeDetectorRef){}
  ProductData:any = [ { id: 1, title: 'Product A' }, { id: 2, title: 'Product B' }, { id: 3, title: 'Product C' } ]; 
  viewProduct(product: any) { 
    console.log('Selected product:', product);
  }
  ngOnInit(): void {
    this.products.getProductList().subscribe((data)=>{
      console.log(data);
      this.ProductData = data;
      this.cdRef.detectChanges;
    })
  }
  trackById(index: number, item: any): number { return item.id; }
  ngOnChanges(){
    this.cdRef.detectChanges;
  }
}

