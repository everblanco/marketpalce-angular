import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-transacciones',
  templateUrl: './transacciones.component.html',
  styleUrls: ['./transacciones.component.css'],
})
export class TransaccionesComponent implements OnInit {
  displayedColumns: string[] = ['numero', 'estado', 'fecha', 'acciones'];
  dataSource = [];

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.consultarTransacciones();
  }

  consultarTransacciones() {
    this.api.consultarTransacciones().subscribe((res: any) => {
      this.dataSource = res.body;
    });
  }

  anularTransaccion(element: any) {
    this.api.anularTransaccion(element.id).subscribe(
      (res: any) => {
        alert('Transación anulada exitosamente');
        this.consultarTransacciones();
      },
      (error: any) => {
        alert('Error en la operación de anular transacción');
      }
    );
  }
}
