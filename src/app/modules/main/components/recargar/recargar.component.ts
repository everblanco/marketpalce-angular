import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-recargar',
  templateUrl: './recargar.component.html',
  styleUrls: ['./recargar.component.css']
})
export class RecargarComponent {
  public formRecargar = new FormGroup({
    numero: new FormControl('', [Validators.required]),
    recarga: new FormControl('', [Validators.required]),
  })

  constructor(private api: ApiService){}


  recargar() {
    if (this.formRecargar.valid) {
      this.api.recargarTarjeta(this.formRecargar.value).subscribe(
        (res:any) => {
          alert("Recarga exitosa");
          this.formRecargar.reset();
        },
        (error: any) => {
          alert("Error al intentar hacer la recarga");
        }
      )
    }
  }
}
