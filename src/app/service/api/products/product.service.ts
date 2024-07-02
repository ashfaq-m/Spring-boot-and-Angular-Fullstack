import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductRepresentation} from "../modules/product-representation";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl : string = 'https://fakestoreapi.com';

  constructor(
    private http : HttpClient
  ) { }

  getAllProducts() : Observable<Array<ProductRepresentation>>{
    const products : string = this.baseUrl + '/products';
    return this.http.get<Array<ProductRepresentation>>(products);
  }

  getAllProductsWithLimit(limit : number = 5) : Observable<Array<ProductRepresentation>>{
    const productsUrl : string = `${this.baseUrl}/products?limit=${limit}`;
    return this.http.get<Array<ProductRepresentation>>(productsUrl);
  }

  createProducts(product : ProductRepresentation) : Observable<ProductRepresentation> {
    const productUrl : string = `${this.baseUrl}/products`;
    return this.http.post<ProductRepresentation>(productUrl, product);
  }
}
