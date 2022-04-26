import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { TarjetaCredito } from '../../models/TarjetaCredito';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  form: TarjetaCredito[]=[];
  loading = false;
  titulo = 'agregar tarjeta';
  id: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  guardarTarjeta(){
    if(this.id === undefined){
    // creamos una nueva tarjeta
  //  this.agregarTarjeta();
  } else {
    // editamos una nueva tarjeta
 //   this.editarTarjeta(this.id)

  }
}

}
