import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ApiService } from '../../services/api.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  public modoPagar = false;
  public infoTarjeta = null;
  public pagarForm = new FormGroup({
    tarjeta: new FormControl('', Validators.required),
    nombre: new FormControl('', Validators.required),
    fecha: new FormControl('', Validators.required),
  });
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private api: ApiService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.consultarCarrito();
  }

  consultarCarrito() {
    this.api.consultarCarrito().subscribe((value: any) => {
      this.data = value;
    });
  }

  eliminar(item: any) {
    this.api.eliminarProduto(item.id).subscribe(() => {
      this.consultarCarrito();
      alert('Producto eliminado');
    });
  }

  consultarTarjeta() {
    const numero = this.pagarForm.get('tarjeta')?.value;
    this.api.consultarTajeta(numero || '').subscribe(
      (res: any) => {
        if (res.body) {
          this.infoTarjeta = res.body;
          this.pagarForm.get("nombre")?.setValue(res.body.nombre);
          this.pagarForm.get("fecha")?.setValue(res.body.fechaVencimiento);
        } else {
          alert('La tarjeta no existe');
        }
      },
      (error: any) => {
        alert('Error al consultar la tarjeta');
      }
    );
  }

  pagar() {
    let fecha = this.pagarForm.get('fecha')?.value;
    let mes = fecha?.split("-")[1];
    let ano = fecha?.split("-")[0] || "";
    const vencimiento = mes + "/" + ano[ano?.length -2] + ano[ano?.length -1];
    this.api
      .pagarCarrito({
        nombre: this.pagarForm.get('nombre')?.value,
        fechaDeVencimiento: vencimiento,
        numeroDeTarjeta: this.pagarForm.get('tarjeta')?.value,
      })
      .subscribe(
        (res: any) => {
          alert('El pago se registró exitosamente.');
          this.dialog.closeAll();
        },
        (error: any) => {
          alert('No se pudo registrar el pago');
        }
      );
  }
}
