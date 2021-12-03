import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GaleriaComponent} from '../mascotas/galeria/galeria.component';

@NgModule({
  declarations: [
    GaleriaComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GaleriaComponent
  ]
})
export class MascotasModule { }
