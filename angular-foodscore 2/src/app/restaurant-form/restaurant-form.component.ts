import { ChangeDetectorRef, Component, inject, output } from '@angular/core';
import { FormsModule,NgForm} from '@angular/forms';
import { Restaurant } from '../interfaces/restaurant';

@Component({
  selector: 'restaurant-form',
  imports: [FormsModule],
  templateUrl: './restaurant-form.component.html',
  styleUrl: './restaurant-form.component.css'
})
export class RestaurantFormComponent {
  readonly days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  daysOpen: boolean[] = (new Array(7)).fill(true);
  weekDay: number = new Date().getDay();

  newRestaurant ={
    name:'',
    image:'',
    cuisine:'',
    description:'',
    phone:'',
    daysOpen:[] as string[]
  };

  #changeDetector = inject(ChangeDetectorRef);
  add = output<Restaurant>();

  changeImage(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (!fileInput.files || fileInput.files.length === 0) { return; }
      const reader: FileReader = new FileReader();
      reader.readAsDataURL(fileInput.files[0]);
      reader.addEventListener('loadend', () => {
        this.newRestaurant.image = reader.result as string;
        this.#changeDetector.markForCheck();
    });
  }

  addRestaurant(form:NgForm){
    this.newRestaurant.daysOpen = this.days.filter((p,i)=>this.daysOpen[i]===true);
    this.add.emit({...this.newRestaurant});
    form.resetForm();
    this.newRestaurant.image = '';
    this.daysOpen = (new Array(7)).fill(true);
  }
}
