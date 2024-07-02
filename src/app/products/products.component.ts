import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ProductService} from "../service/api/products/product.service";
import {ProductRepresentation} from "../service/api/modules/product-representation";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{

  products : ProductRepresentation[] = [];

  constructor(
    private activatedRoute : ActivatedRoute,
    private service : ProductService
  ) {
  }

  firstName : any;
  lastName : any;
  course : string = '';

  ngOnInit(): void {
    console.log(this.activatedRoute)
    this.firstName = this.activatedRoute.snapshot.params['firstName'];
    this.lastName = this.activatedRoute.snapshot.queryParams['lastName']
    this.course = this.activatedRoute.snapshot.queryParams['course'];

    // Api call
    this.service.getAllProducts().subscribe({
      next : (data) : void => {
        console.log(data);
        this.products = data;
      }
    });
    this.service.getAllProductsWithLimit().subscribe({
      next : (data) : void => {
        console.log(data)
      }
    });

    // post method
    const product : ProductRepresentation = {
      title : 'My Product',
      description : 'Product description',
      price : 12,
      category : 'Any category',
      image : 'https://some-image.jps'
    }
    this.service.createProducts(product).subscribe({
      next : (result : ProductRepresentation) : void => {
        console.log(result);
      },
      error : (error : HttpErrorResponse) : void => {
        if (error instanceof  ErrorEvent){
          console.error('An error occurred :', error['message']);
        }else {
          // server side error
          console.error(`Server returned status code : ${error.status}, error message : ${error.message}`);
        }
      }
    });

  }

}
