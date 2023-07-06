import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
})
export class ProductosComponent implements OnInit {
  public listaProductos: Array<any> = [];
  public listaProductosView: Array<any> = [];
  public finderControl = new FormControl('');

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.getProductos();
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
    });
  }
}
