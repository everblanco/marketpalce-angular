import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { ApiService } from './services/api.service';
import { StateService } from './services/state.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CarritoComponent } from './components/carrito/carrito.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  public carrito: any;
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private state: StateService,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.state.store.subscribe(
      (value: any) => {
        this.carrito = value;
      }
    )
  }

  get cantidad(): number {
    return this.carrito? this.carrito.body?.items?.length : 0;
  }

  openModal() {
    let dialogRef = this.dialog.open(CarritoComponent);
    dialogRef.afterClosed().subscribe(
      () => {
        location.reload();
      }
    )
  }
}
