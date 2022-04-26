import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetaCreditoPageComponent } from './pages/tarjeta-credito-page/tarjeta-credito-page.component';
import { TarjetaListComponent } from './components/tarjeta-list/tarjeta-list.component';
import { CreateCardComponent } from './components/create-card/create-card.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TarjetaCreditoPageComponent,
    TarjetaListComponent,
    TarjetaCreditoPageComponent,
    CreateCardComponent
  ],
  imports: [
    CommonModule,ReactiveFormsModule
  ],
  exports: [
    TarjetaCreditoPageComponent
  ]
})
export class TarjetaCreditoModule { }
