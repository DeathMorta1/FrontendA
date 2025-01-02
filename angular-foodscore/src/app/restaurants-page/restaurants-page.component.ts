import { Component } from '@angular/core';
import { Restaurant } from '../interfaces/restaurant';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'restaurants-page',
  imports: [FormsModule],
  templateUrl: './restaurants-page.component.html',
  styleUrl: './restaurants-page.component.css'
})
export class RestaurantsPageComponent {
  restaurants: Restaurant[] = [];

  newRestaurant ={
    name:'',
    image:'',
    cuisine:'',
    description:'',
    phone:'',
    daysOpen:[]
  };
}
