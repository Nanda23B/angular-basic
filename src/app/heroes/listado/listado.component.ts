import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Capitan America'];

  heroeBorrado: string = '';

  borrarHeroe(): void  {
    //Desaparece el primer arreglo
    this.heroeBorrado = this.heroes.shift() || "Noy hay elementos";

    //delete this.heroes[0] ;

    //this.heroes.pop();
  }

}
