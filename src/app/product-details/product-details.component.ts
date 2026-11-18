import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();

  deleteProduct(): void {
    this.delete.emit(this.product.id);
  }
}