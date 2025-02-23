import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: any;
  @Output() remove = new EventEmitter<number>();
  @Output() like = new EventEmitter<number>();

  onRemove() {
    this.remove.emit(this.product.id);
  }

  onLike() {
    this.like.emit(this.product.id);
  }
}