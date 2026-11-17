import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { PRODUCTS } from '../models/constant';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
 products: Product[] = PRODUCTS;
  constructor() { };
  getProducts(): Product[] {
    return this.products;
    
}
deleteProduct(productId: number): void {
  let index=this.products.findIndex(product=>product.id==productId)
    this.products.splice(index,1)
}}