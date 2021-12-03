import { Component, OnInit } from '@angular/core';
import { ServiuserService } from '../servicios/serviuser.service';
import { Usuario } from '../modelos/usuario';
import { Router } from '@angular/router';


@Component({
  selector: 'listado-component',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class UsuariosListadoComponent implements OnInit {

  usuarios:Usuario[] = []

  constructor(private usuariosSrv:ServiuserService, private router:Router) { } // se inyectó el servicio SERVIUSERSERVICE en el contructor

  ngOnInit(): void {
    this.usuariosSrv.cargarUsuarios().subscribe(data=> {
      this.usuarios=data

    })
  }

}
