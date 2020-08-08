import { Component, OnInit } from "@angular/core";
import { from } from "rxjs";
import { Giasu } from "../Giasu";
import { GiasuService } from "../giasu.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-sign-up",
  templateUrl: "./sign-up.component.html",
  styleUrls: ["./sign-up.component.css"]
})
export class SignUpComponent implements OnInit {
  product: Giasu = new Giasu();
  constructor(private productService: GiasuService, private router: Router) {}
  ngOnInit() {
  }

  addProduct(){
    this.productService.addProduct(this.product).subscribe(
      // data => this.router.navigateByUrl("/admin/manager")
      );
  }
}
