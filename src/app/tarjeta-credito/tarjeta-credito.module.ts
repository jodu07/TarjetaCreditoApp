import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaCrditoPageComponent } from './pages/tarjeta-crdito-page/tarjeta-crdito-page.component';
import { TarjetaListComponent } from './components/tarjeta-list/tarjeta-list.component';



@NgModule({
  declarations: [
    TarjetaCrditoPageComponent,
    TarjetaListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TarjetaCreditoModule { }
