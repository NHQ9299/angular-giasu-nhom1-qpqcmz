import { Component, OnInit } from "@angular/core";
import { Product } from '../Product';
import { ProductService } from '../product.service';
import { ActivatedRoute } from "@angular/router";
import { Router } from "@angular/router";
@Component({
  selector: "app-product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.css"]
})
export class ProductEditComponent implements OnInit {
  product: Product;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
    private router : Router
  ) {}

  ngOnInit() {
    this.getProduct();
  }
  getProduct() {
    this.activatedRoute.params.subscribe(param => {
      this.productService.ListProduct(param.id).subscribe(
        data => (this.product = data));
    });
  }
  update(){
    this.productService.updateProducts(this.product).subscribe(data => this.router.navigateByUrl("/admin/maganer-taikhoan"))
  }
}
