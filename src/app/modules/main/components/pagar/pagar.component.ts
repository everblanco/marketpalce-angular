import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.component.html',
  styleUrls: ['./pagar.component.css']
})
export class PagarComponent implements OnInit{

  constructor(private api: ApiService, private state: StateService) {}

  ngOnInit(): void {

  }

}
