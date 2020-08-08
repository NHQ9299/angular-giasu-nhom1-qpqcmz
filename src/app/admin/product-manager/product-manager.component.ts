import { Component, OnInit } from "@angular/core";
import { from } from 'rxjs';
import { Product } from '../Product';
import { ProductService } from '../product.service';
@Component({
  selector: "app-product-manager",
  templateUrl: "./product-manager.component.html",
  styleUrls: ["./product-manager.component.css"]
})
export class ProductManagerComponent implements OnInit {
  products: Product[];
  selected: Product;
  constructor(private productService: ProductService) {}

  ngOnInit() {
     this.getProducts();
  }
 

  getProducts() {
    this.productService.listProducts().subscribe(data =>{
      this.products = data;
    })
    // this.products = this.productService.listProducts();
  }
   removeitem(id) {
    this.productService.removeProducts(id).subscribe(Response =>{
      this.products = this.products.filter(product => product.id !== id);
  })
  }
}
