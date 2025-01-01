import { Component } from '@angular/core';
import { Product } from '../interfaces/product';
import { NgClass } from '@angular/common';

@Component({
  selector: 'products-page',
  imports: [NgClass],
  templateUrl: './products-page.component.html',
  styleUrl: './products-page.component.css'
})
export class ProductsPageComponent {
  title = "Mi lista de productos";
  products: Product[] =[{
    id: 1,
    description: 'SSD hard drive',
    available: '2016-10-03',
    price: 75,
    imageUrl: '/ssd.jpg',
    rating: 5
  },{
    id: 2,
    description: 'LGA1151 Motherboard',
    available: '2016-09-15',
    price: 96.95,
    imageUrl: '/motherboard.jpg',
    rating: 4
  }];

  showImage = true;

  toggleImage(){
    this.showImage = !this.showImage;
  };

}
