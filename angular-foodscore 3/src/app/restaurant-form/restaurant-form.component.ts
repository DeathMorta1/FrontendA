import { ChangeDetectorRef, Component, inject, output } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { Restaurant } from '../interfaces/restaurant';

@Component({
  selector: 'restaurant-form',
  imports: [FormsModule],
  templateUrl: './restaurant-form.component.html',
  styleUrl: './restaurant-form.component.css'
})

//Esta es la segunda version que hago aqui he cambiado la variable que se pasaba por referencia de ngForm,
//por el bug este del asco que no hace bien el reset del formulario del array de DaysOpen cuando todo esta seleccionado, asi que he
//tenido que añadir la propiedad fileName para el reset del texto de la imagen y crear la funcion de resetRestaurant
//para asi poder resetear el valor del restaurante.

export class RestaurantFormComponent {
  readonly days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  daysOpen: boolean[] = (new Array(7)).fill(true);
  weekDay: number = new Date().getDay();
  newRestaurant!: Restaurant;
  fileName = '';

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

  addRestaurant(){
    this.newRestaurant.daysOpen = this.days.filter((p,i)=>this.daysOpen[i]===true);
    this.add.emit({...this.newRestaurant});
    this.newRestaurant.image = '';
    this.fileName= '';
    this.daysOpen = (new Array(7)).fill(true);
    this.resetRestaurant();
  }
}
