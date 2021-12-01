import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';



@NgModule({
  declarations: [
    MenuComponent,
    PrincipalComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    MenuComponent,
    PrincipalComponent
  ]
})
export class GeneralModule { }
