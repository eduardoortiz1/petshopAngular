import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleriaComponent} from './mascotas/galeria/galeria.component';
import { UsuariosListadoComponent } from './usuarios/listado/listado.component';
import { UsuariosRegistroComponent } from './usuarios/registro/registro.component';
import { PrincipalComponent } from './general/principal/principal.component';

const routes: Routes = [
  { path:"home", component:PrincipalComponent},
  { path:"usuarios", component:UsuariosListadoComponent},
  { path:"usuarios/registro", component:UsuariosRegistroComponent},
  { path:"usuarios/registro/:id", component:UsuariosRegistroComponent},
  { path:"galeria", component:GaleriaComponent},
  { path:"**", redirectTo:"/home", pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
