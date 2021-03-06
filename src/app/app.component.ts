import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = 'Felipe';

  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      case: '19'
    }
  };

// tslint:disable-next-line: no-shadowed-variable
  valorDePromesa = new Promise( ( resolve, reject ) => {
    setTimeout( () => resolve('Llegó la data!'), 1000 );
  });

  fecha = new Date();

  nombre2 = 'felipE eliAs vergarA albornOz';

  video = 'mOeSfOJrUIk';

  activar = true;

  password = 'Felipe';

  mostrar = true;

}
