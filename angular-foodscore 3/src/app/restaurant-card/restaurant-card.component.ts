import {Component, DestroyRef, inject, input, output} from '@angular/core';
import { Restaurant } from '../interfaces/restaurant';
import { RestaurantsService } from '../services/restaurants.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

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

  #restauranService = inject(RestaurantsService);
  #destroyRef = inject(DestroyRef);

  product = input<Restaurant>();
  deleted = output();
  
  removeRestaurant(){
    this.#restauranService.deleteRestaurant(this.product()!.id!)
    .pipe(takeUntilDestroyed(this.#destroyRef))
    .subscribe(() => this.deleted.emit());
  }
}

