import { Component, DestroyRef, inject, input, numberAttribute, output, signal } from '@angular/core';
import { Restaurant } from '../interfaces/restaurant';
import { RestaurantsService } from '../services/restaurants.service';
import { rxResource, takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { catchError, EMPTY, map, tap } from 'rxjs';
import { Router, RouterLink } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'restaurant-details',
  imports: [RouterLink],
  templateUrl: './restaurant-details.component.html',
  styleUrl: './restaurant-details.component.css'
})
export class RestaurantDetailsComponent {
  readonly days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  weekDay: number = new Date().getDay();

  id = input.required({transform: numberAttribute});
  product = signal<Restaurant | null>(null);
  #restaurantService = inject(RestaurantsService);
  #destroyRef = inject(DestroyRef);
  #router = inject(Router);
  #title = inject(Title);
  deleted = output();

  productResource = rxResource({
    request: () => this.id(), // Dependencia
    loader: ({ request: id }) =>
      this.#restaurantService.getRestaurant(id).pipe(
        tap(restaurant => this.#title.setTitle(restaurant.name)), 
        map(restaurant => ({
        ...restaurant,
        daysOpen: restaurant.daysOpen.map((d) => this.days[+d])
      })),
        catchError(() => {
          this.#router.navigate(['/restaurants']); // Volvemos a la página principal
          return EMPTY;
        })
      ),
  });

  removeRestaurant(){
    this.#restaurantService.deleteRestaurant(this.id())
    .pipe(takeUntilDestroyed(this.#destroyRef))
    .subscribe(() => {
      this.deleted.emit();
      this.goMain();
    });
  }

  goMain() {
    this.#router.navigate(['/restaurants']);
  }
}
