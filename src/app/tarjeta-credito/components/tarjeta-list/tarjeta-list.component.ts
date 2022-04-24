import { Component, Input, OnInit } from '@angular/core';
import { TarjetaCredito } from '../../models/TarjetaCredito';

@Component({
  selector: 'app-tarjeta-list',
  templateUrl: './tarjeta-list.component.html',
  styleUrls: ['./tarjeta-list.component.css']
})
export class TarjetaListComponent implements OnInit {


  @Input() listTarjetas: TarjetaCredito[]=[]

  constructor() { }

  ngOnInit(): void {
  }

  editarTarjeta(){

  }

  eliminarTarjeta(){

  }

}
