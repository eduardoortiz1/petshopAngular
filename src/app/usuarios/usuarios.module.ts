import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadoComponent } from './listado/listado.component';
import { RegistroComponent } from './registro/registro.component';



@NgModule({
  declarations: [
    ListadoComponent,
    RegistroComponent
  ],
  imports: [
    CommonModule
  ],
  //Para que la exportación se envíe con todo y sus componentes:
  exports: [
    ListadoComponent
  ]
})
export class UsuariosModule { }
