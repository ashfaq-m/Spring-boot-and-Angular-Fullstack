import { Component } from '@angular/core';
import {ProductRepresentation} from "../service/api/modules/product-representation";
import {ProductService} from "../service/api/products/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.scss']
})
export class NewProductComponent {
  product: ProductRepresentation = {};

  constructor(
    private service : ProductService,
    private router : Router
  ) {
  }

  saveProduct() {
    this.service.createProducts(this.product)
      .subscribe({
        next : (result : ProductRepresentation) : void => {
          this.router.navigate(['/products']);
        }
      });
  }
}
