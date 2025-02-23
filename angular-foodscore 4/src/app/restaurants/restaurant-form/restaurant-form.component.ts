import {Component, DestroyRef, inject, output } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Restaurant } from '../interfaces/restaurant';
import { EncodeBase64Directive } from '../../shared/directives/encode-base64.directive';
import { RestaurantsService } from '../services/restaurants.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { CanComponentDeactivate } from '../../shared/guards/leave-page-guard.guard';

@Component({
  selector: 'restaurant-form',
  imports: [FormsModule, EncodeBase64Directive],
  templateUrl: './restaurant-form.component.html',
  styleUrl: './restaurant-form.component.css'
})

export class RestaurantFormComponent implements CanComponentDeactivate{
  readonly days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  daysOpen: boolean[] = (new Array(7)).fill(true);
  weekDay: number = new Date().getDay();
  newRestaurant!: Restaurant;
  fileName = '';

  #router = inject(Router);
  #productService = inject(RestaurantsService);
  #destroyRef = inject(DestroyRef);
  #title = inject(Title);

  saved = false;

  constructor(){
    this.#title.setTitle('Nuevo Restaurante');
    this.resetRestaurant();
  }

  private resetRestaurant(){
    this.newRestaurant ={
      name:'',
      image:'',
      cuisine:'',
      description:'',
      phone:'',
      daysOpen:[] as string[]
    };
  }

  add = output<Restaurant>();

  addRestaurant(){
    this.newRestaurant.daysOpen = this.daysOpen.reduce<string[]>((acc, p, i) => {
      if (p === true) acc.push(i.toString());
      return acc;
    }, []);

    this.#productService.addRestaurant(this.newRestaurant)
    .pipe(takeUntilDestroyed(this.#destroyRef))
    .subscribe({
      next:(restaurant) =>{
        this.saved = true;
        this.add.emit(restaurant);
        this.#router.navigate(['/restaurants', restaurant.id]);
      },
      error: () => console.error('Error al añadir el restaurante')
    });
  }

  canDeactivate() {
    return this.saved || confirm('¿Quieres abandonar la página?. Los cambios se perderán...');
  }
}
