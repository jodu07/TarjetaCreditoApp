import { Component, OnInit } from '@angular/core';
import { TarjetaCredito } from '../../models/TarjetaCredito';
import { TarjetaCreditoService } from '../../services/tarjeta-credito.service';

@Component({
  selector: 'app-tarjeta-credito-page',
  templateUrl: './tarjeta-credito-page.component.html',
  styleUrls: ['./tarjeta-credito-page.component.css']
})
export class TarjetaCreditoPageComponent implements OnInit {

 // listTarjetas: TarjetaCredito[]=[];

  constructor(private _tarjetaService: TarjetaCreditoService) { }


 

  ngOnInit(): void {
  
}


}