import { Component, signal} from '@angular/core';
import { Restaurant } from '../interfaces/restaurant';
import { RestaurantFormComponent } from '../restaurant-form/restaurant-form.component';
import { RestaurantCardComponent } from '../restaurant-card/restaurant-card.component';

@Component({
  selector: 'restaurants-page',
  imports: [RestaurantFormComponent,RestaurantCardComponent],
  templateUrl: './restaurants-page.component.html',
  styleUrl: './restaurants-page.component.css'
})

export class RestaurantsPageComponent {
  restaurants = signal<Restaurant[]>([]);

  addRestaurant(restaurant: Restaurant){
    this.restaurants.update(restaurants=> restaurants.concat(restaurant));
  }

  sendRest(){
    this.restaurants.set([...this.restaurants()]);
  }

  deleteRestaurant(restaurant: Restaurant){
    this.restaurants.update(restaurants=> restaurants.filter(p=> p!== restaurant));
  }
}

