import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ProductosComponent } from './components/productos/productos.component';
import { TarjetasComponent } from './components/tarjetas/tarjetas.component';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';
import { MatChipsModule } from '@angular/material/chips';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PagarComponent } from './components/pagar/pagar.component';
import { RecargarComponent } from './components/recargar/recargar.component';
import { TransaccionesComponent } from './components/transacciones/transacciones.component';


const materialComponents = [
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatInputModule,
  MatFormFieldModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatBadgeModule,
  MatChipsModule,
  MatSlideToggleModule,
  MatDialogModule,
  MatSelectModule,
  MatMenuModule,
  MatAutocompleteModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatTabsModule,
  MatTableModule,
];

@NgModule({
  declarations: [
    MainComponent,
    ProductosComponent,
    TarjetasComponent,
    CarritoComponent,
    PagarComponent,
    RecargarComponent,
    TransaccionesComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    materialComponents,
    ReactiveFormsModule
  ],
  entryComponents: [
    CarritoComponent,
    PagarComponent
  ]
})
export class MainModule { }
