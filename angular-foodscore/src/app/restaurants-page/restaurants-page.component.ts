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
  readonly days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  daysOpen: boolean[] = (new Array(7)).fill(true);
  weekDay: number = new Date().getDay();
  restaurants: Restaurant[] = [];

  newRestaurant ={
    name:'',
    image:'',
    cuisine:'',
    description:'',
    phone:'',
    daysOpen:[] as string[]
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

  addRestaurant(){
    this.newRestaurant.daysOpen = this.days.filter((p,i)=>this.daysOpen[i]===true);
    const p = {...this.newRestaurant};
    console.log(p);
  }
}
