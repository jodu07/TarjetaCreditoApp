import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaCreditoPageComponent } from './pages/tarjeta-credito-page/tarjeta-credito-page.component';
import { TarjetaListComponent } from './components/tarjeta-list/tarjeta-list.component';

@NgModule({
  declarations: [
    TarjetaCreditoPageComponent,
    TarjetaListComponent,
    TarjetaCreditoPageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TarjetaCreditoPageComponent
  ]
})
export class TarjetaCreditoModule { }
