import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';
import { ProductosComponent } from './components/productos/productos.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';
import { CarritoComponent } from './components/carrito/carrito.component';

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
        path: "carrito",
        component: CarritoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
