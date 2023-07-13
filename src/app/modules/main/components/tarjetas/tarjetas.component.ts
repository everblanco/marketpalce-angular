import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent {

  public formTarjeta = new FormGroup({
    nombre: new FormControl(),
    apellido: new FormControl(),
    tipo: new FormControl(),
  })
  constructor() {

  }

  crearTarjeta() {
    console.log(this.formTarjeta.value);
  }
}
