import {Component, input, output} from '@angular/core';
import { Restaurant } from '../interfaces/restaurant';

@Component({
  selector: 'restaurant-card',
  imports: [],
  templateUrl: './restaurant-card.component.html',
  styleUrl: './restaurant-card.component.css'
})

export class RestaurantCardComponent {
  readonly days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  daysOpen: boolean[] = (new Array(7)).fill(true);
  weekDay: number = new Date().getDay();

  product = input<Restaurant>();
  deleted = output();

  removeRestaurant(){
    this.deleted.emit();
  }
}

