import {Component, DestroyRef, inject, output } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Restaurant } from '../interfaces/restaurant';
import { EncodeBase64Directive } from '../directives/encode-base64.directive';
import { RestaurantsService } from '../services/restaurants.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'restaurant-form',
  imports: [FormsModule, EncodeBase64Directive],
  templateUrl: './restaurant-form.component.html',
  styleUrl: './restaurant-form.component.css'
})

export class RestaurantFormComponent {
  readonly days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  daysOpen: boolean[] = (new Array(7)).fill(true);
  weekDay: number = new Date().getDay();
  newRestaurant!: Restaurant;
  fileName = '';

  #productService = inject(RestaurantsService);
  #destroyRef = inject(DestroyRef);

  constructor(){
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
    this.newRestaurant.daysOpen = this.days.filter((p,i)=>this.daysOpen[i]===true);
    console.log(this.newRestaurant.daysOpen);

    this.#productService.addRestaurant(this.newRestaurant)
    .pipe(takeUntilDestroyed(this.#destroyRef))
    .subscribe((restaurant) =>{
      this.add.emit(restaurant);
      this.newRestaurant.image = '';
      this.fileName= '';
      this.daysOpen = (new Array(7)).fill(true);
      this.resetRestaurant();
    });
  }
}
