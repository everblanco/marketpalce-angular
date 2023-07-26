import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css'],
})
export class TarjetasComponent {
  public formTarjeta = new FormGroup({
    nombre: new FormControl('', [Validators.required]),
    apellido: new FormControl('', [Validators.required]),
    tipo: new FormControl('', [Validators.required]),
  });
  constructor(private api: ApiService) {}

  crearTarjeta() {
    if (this.formTarjeta.valid) {
      const name =
        this.formTarjeta.get('nombre')?.value +
        ' ' +
        this.formTarjeta.get('apellido')?.value;
      this.api.crearTarjeta({
        nombre: name,
        tipo: this.formTarjeta.get('tipo')?.value,
      }).subscribe(
        (res:any) => {
          alert('Tarjeta creada exitosamente');
          this.formTarjeta.reset();
        }
      )
    }
  }
}
