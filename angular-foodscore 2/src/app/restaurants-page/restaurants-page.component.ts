import { Component, signal} from '@angular/core';
import { Restaurant } from '../interfaces/restaurant';
import { RestaurantFormComponent } from '../restaurant-form/restaurant-form.component';

@Component({
  selector: 'restaurants-page',
  imports: [RestaurantFormComponent],
  templateUrl: './restaurants-page.component.html',
  styleUrl: './restaurants-page.component.css'
})

export class RestaurantsPageComponent {
  readonly days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  daysOpen: boolean[] = (new Array(7)).fill(true);
  weekDay: number = new Date().getDay();
  restaurants = signal<Restaurant[]>([]);

  addRestaurant(restaurant: Restaurant){
    this.restaurants.update(restaurants=> restaurants.concat(restaurant));
  }

  removeRestaurant(restaurant: Restaurant){
    this.restaurants.update(restaurants=> restaurants.filter(p => p !== restaurant));
  }

}
