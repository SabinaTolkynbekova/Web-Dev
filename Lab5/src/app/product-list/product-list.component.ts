import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from '../product-item/product-item.component';

interface Product {
  name: string;
  likes: number;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports: [CommonModule, ProductItemComponent]
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() remove = new EventEmitter<string>();
  @Output() like = new EventEmitter<string>();

  onRemove(productName: string) {
    this.remove.emit(productName);
  }

  onLike(productName: string) {
    this.like.emit(productName);
  }
}