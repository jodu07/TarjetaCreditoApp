import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { TarjetaCredito } from '../../models/TarjetaCredito';
import { TarjetaCreditoService } from '../../services/tarjeta-credito.service';

@Component({
  selector: 'app-tarjeta-list',
  templateUrl: './tarjeta-list.component.html',
  styleUrls: ['./tarjeta-list.component.css']
})
export class TarjetaListComponent implements OnInit {


  listTarjetas: TarjetaCredito[]=[]

  constructor(private _tarjetaService: TarjetaCreditoService,
            private toastr: ToastrService

  ) { }

  ngOnInit(): void {
    this.obtenerTarjetas();
  }

   // Obtener el id y la informacion 
   obtenerTarjetas(){
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

  eliminarTarjeta(id: any) {
    this._tarjetaService.eliminarTarjeta(id).then(() => {
      this.toastr.error('La tarjeta fue eliminada!', 'TARJETA ELIMINADA' )

    }, error =>{
      this.toastr.error('Opps.. Ocurrío un error', 'Error');
      console.log(error);
    })
  }

  editarTarjeta(tarjeta: TarjetaCredito){
    this._tarjetaService.addTarjetaEdit(tarjeta);
  }

}
