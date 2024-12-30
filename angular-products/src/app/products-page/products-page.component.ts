import { Component } from '@angular/core';
import { Product } from '../interfaces/product';

@Component({
  selector: 'products-page',
  imports: [],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {
  title = "Mi lista de productos";
  products: Product[] =[];
}
