import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormControl } from '@angular/forms';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  public listaProductos: Array<any> = [];
  public listaProductosView: Array<any> = [];
  public finderControl = new FormControl('');
  public carrito: any;

  constructor(private api: ApiService, private state: StateService) {}

  ngOnInit(): void {
    this.getCarrito();
    this.observerControl();
  }

  observerControl() {
    this.finderControl.valueChanges.subscribe((value: any) => {
      if (value && String(value).length > 2) {
        console.log(value);
        this.listaProductosView = this.listaProductos.filter((item) =>
          String(item.title)
            .toLocaleLowerCase()
            .includes(String(value).toLowerCase())
        );
      } else {
        this.listaProductosView = this.listaProductos;
      }
    });
  }

  getProductos() {
    this.api.getProductos().subscribe((res: any) => {
      this.listaProductosView = res.body;
      this.listaProductos = res.body;
      this.cambiarEstado();
    });
  }

  agregar(item: any) {
    this.api
      .agregarProduto({
        productoId: item.id,
        cantidad: 1,
      })
      .subscribe(() => {
        this.getCarrito();
        alert('Producto agregado');
      });
  }

  eliminar(item: any) {
    const index = this.carrito.body.items.findIndex(
      (value: any) => value.productoId == item.id
    );
    if (index >= 0) {
      this.api.eliminarProduto(this.carrito.body.items[index].id).subscribe(() => {
        this.getCarrito();
        alert('Producto eliminado');
      });
    }
  }

  getCarrito() {
    this.api.consultarCarrito().subscribe((res: any) => {
      this.state.store.next(res);
      this.carrito = res;
      this.getProductos();
    });
  }

  cambiarEstado() {
    this.carrito.body.items.forEach((element: any) => {
      const { productoId } = element;
      const index = this.listaProductosView.findIndex(
        (item: any) => item.id == productoId
      );
      if (index >= 0) {
        this.listaProductosView[index]['carrito'] = true;
      }
    });
  }
}
