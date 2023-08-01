import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ProductosComponent } from './components/productos/productos.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { RecargarComponent } from './components/recargar/recargar.component';
import { TransaccionesComponent } from './components/transacciones/transacciones.component';

const routes: Routes = [
  {
    path: "",
    component: MainComponent,
    children: [
      {
        path: "productos",
        component: ProductosComponent
      },
      {
        path: "tarjetas",
        component: TarjetasComponent
      },
      {
        path: "recargar",
        component: RecargarComponent
      },
      {
        path: "carrito",
        component: CarritoComponent
      },
      {
        path: 'transacciones',
        component: TransaccionesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
