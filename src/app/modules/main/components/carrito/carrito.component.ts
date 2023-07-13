import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css'],
})
export class CarritoComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private api: ApiService
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
}
