import { Component, OnInit } from '@angular/core';
import { TarjetaCredito } from '../../models/TarjetaCredito';
import { TarjetaCreditoService } from '../../services/tarjeta-credito.service';

@Component({
  selector: 'app-tarjeta-credito-page',
  templateUrl: './tarjeta-credito-page.component.html',
  styleUrls: ['./tarjeta-credito-page.component.css']
})
export class TarjetaCreditoPageComponent implements OnInit {

  listTarjetas: TarjetaCredito[]=[];

  constructor(private _tarjetaService: TarjetaCreditoService) { }


  listarTarjetas(){

    this._tarjetaService.getTarjetas().subscribe(doc => {           
      this.listTarjetas = [];
      doc.forEach((element: any) => {
        this.listTarjetas.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        });
      });
      console.log(this.listTarjetas);
    })
  }

  ngOnInit(): void {

    this.listarTarjetas()
  }

}
