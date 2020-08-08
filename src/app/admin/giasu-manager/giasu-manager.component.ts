import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Giasu } from '../Giasu';
import { GiasuService } from '../giasu.service';

@Component({
  selector: 'app-giasu-manager',
  templateUrl: './giasu-manager.component.html',
  styleUrls: ['./giasu-manager.component.css']
})
export class GiasuManagerComponent implements OnInit {

  products: Giasu[];
  selected: Giasu;
  constructor(private productService: GiasuService) {}
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