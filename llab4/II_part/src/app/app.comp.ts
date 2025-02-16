import { Component } from '@angular/core';
import { ProductsComponent } from './products/products.comp';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsComponent], 
  templateUrl: './app.comp.html',
  styleUrls: ['./app.comp.css']
})
export class AppComponent {
  title = 'product-list';
}