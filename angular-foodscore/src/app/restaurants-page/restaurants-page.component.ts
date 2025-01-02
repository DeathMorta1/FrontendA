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

  changeImage(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (!fileInput.files || fileInput.files.length === 0) { return; }
      const reader: FileReader = new FileReader();
      reader.readAsDataURL(fileInput.files[0]);
      reader.addEventListener('loadend', () => {
        this.newRestaurant.image = reader.result as string;
      });
    }
   
}
