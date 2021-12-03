import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosListadoComponent } from './listado/listado.component';
import { UsuariosRegistroComponent } from './registro/registro.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ServiuserService } from './servicios/serviuser.service';



@NgModule({
  declarations: [
    UsuariosListadoComponent,
    UsuariosRegistroComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    RouterModule
  ],
  providers:[
    ServiuserService
  ],
  //Para que la exportación se envíe con todo y sus componentes:
  exports: [
    UsuariosListadoComponent,
    UsuariosRegistroComponent
  ]
})
export class UsuariosModule { }
