import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { TarjetaCredito } from '../../models/TarjetaCredito';
import { TarjetaCreditoService } from '../../services/tarjeta-credito.service';

@Component({
  selector: 'app-create-card',
  templateUrl: './create-card.component.html',
  styleUrls: ['./create-card.component.css']
})
export class CreateCardComponent implements OnInit {

  form!: FormGroup;
  loading = false;
  titulo = 'agregar tarjeta';
  id: string | undefined;

  constructor(private fb: FormBuilder,
    private _tarjetaService: TarjetaCreditoService,
    private toastr: ToastrService) {

      this.form = this.fb.group({
        titular: ['', Validators.required], 
        numeroTarjeta: ['',[Validators.required, Validators.minLength(16), Validators.maxLength(16)]], 
        fechaExpiracion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]], 
        cvv: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(3)]], 
      })
    
    }

  ngOnInit(): void {
    this._tarjetaService.getTarjetaEdit().subscribe(data =>{      
      this.id = data.id;
      this.titulo = 'editar tarjeta';
      this.form.patchValue({
        titular: data.titular,
        numeroTarjeta: data.numeroTarjeta,
        fechaExpiracion: data.fechaExpiracion,
        cvv: data.cvv
      })
    })
  }

  guardarTarjeta(){
    if(this.id === undefined){
   // creamos una nueva tarjeta
    this.agregarTarjeta();
  } else {
    // editamos una nueva tarjeta
    this.editarTarjeta(this.id);

  }
}

editarTarjeta(id: string){
  const TARJETA: any = {
    titular: this.form.value.titular,
    numeroTarjeta: this.form.value.numeroTarjeta,
    fechaExpiracion: this.form.value.fechaExpiracion,
    cvv: this.form.value.cvv,    
    fechaActualizacion: new Date(),

  }
  this.loading = true;
  this._tarjetaService.editarTarjeta(id, TARJETA).then(() =>{
    this.loading = false;
    this.titulo = 'agregar tarjeta';
    this.form.reset();
    this.id = undefined;
    this.toastr.info('La tarjeta fue actualizada con exito!', 'REGISTRO ACTUALIZADO')
  }, error => {
    console.log(error);
  })

}

agregarTarjeta(){
  const TARJETA: TarjetaCredito = {
    titular: this.form.value.titular,
    numeroTarjeta: this.form.value.numeroTarjeta,
    fechaExpiracion: this.form.value.fechaExpiracion,
    cvv: this.form.value.cvv,
    fechaCreacion: new Date(),
    fechaActualizacion: new Date(),
  }
  this.loading = true;
  this._tarjetaService.guardarTarjeta(TARJETA).then(() =>{
    this.loading = false;
    console.log('tarjeta registrada');
    this.toastr.success('La tarjeta fue registrada con exito!', 'TARJETA REGISTRADA' )
    this.form.reset();
  }, error => {
    this.loading = false;
    this.toastr.error('Opps.. Ocurrío un error', 'Error');
    console.log(error);
  })
}

}
