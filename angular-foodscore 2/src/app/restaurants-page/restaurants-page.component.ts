import { Component, computed, signal} from '@angular/core';
import { Restaurant } from '../interfaces/restaurant';
import { RestaurantFormComponent } from '../restaurant-form/restaurant-form.component';
import { RestaurantCardComponent } from '../restaurant-card/restaurant-card.component';
import { FormsModule} from '@angular/forms';

@Component({
  selector: 'restaurants-page',
  imports: [RestaurantFormComponent,RestaurantCardComponent,FormsModule],
  templateUrl: './restaurants-page.component.html',
  styleUrl: './restaurants-page.component.css'
})

export class RestaurantsPageComponent {
  readonly days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  weekDay: number = new Date().getDay();
  restaurants = signal<Restaurant[]>([]);

  search = signal('');
  open = signal(true);

  restaurantsFiltered = computed(()=>{
    const searchLower = this.search()?.toLowerCase();
    return this.restaurants().filter(p=>
        p.name.toLowerCase().includes(searchLower) ||
        p.description.toLowerCase().includes(searchLower))
  });

  toggleRestaurants(){
    this.open.update(o=>!o);
  }
  
  addRestaurant(restaurant: Restaurant){
    this.restaurants.update(restaurants=> [...restaurants,restaurant]);
  }

  deleteRestaurant(restaurant: Restaurant){
    this.restaurants.update(restaurants=> restaurants.filter(p=> p !== restaurant));
  }
}

