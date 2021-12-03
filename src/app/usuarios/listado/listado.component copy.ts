import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../modelos/usuario';
import { UsuarioService } from '../servicios/usuario.service';


@Component({
  selector: 'usuarios-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class UsuariosListadoComponent implements OnInit {

  idUsuarioEliminar:string|null = null
  nombreUsuarioEliminar:string = ""
  datoBuscar:string = ""

  page:number = 1;
  pageSize:number = 3;
  collectionSize:number = 0;

  usuarios:Usuario[] = []

  constructor(private usuariosSrv:UsuarioService, private router:Router) { }

  ngOnInit(): void {
    this.cargarUsuarios()
  }

  buscarUsuarios(clean:boolean):void {
    if (clean) {
      this.datoBuscar = ""
    }
    this.cargarUsuarios()
  }

  cambiarMinusculasyTildes(textoCambiar:string):string {
    return textoCambiar.toLowerCase().replace('á','a').replace('é','e').replace('í','i').replace('ó','o').replace('ú','u');
  }

  cargarUsuarios():void {
    console.log(this.datoBuscar)
    this.usuariosSrv.cargarUsuarios().subscribe(data=>{
      const listaTemp:Usuario[] = data
      const dbusc = this.cambiarMinusculasyTildes(this.datoBuscar)
      this.usuarios = listaTemp.filter(cli=>this.cambiarMinusculasyTildes(cli.nombres+" "+cli.apellidos).includes(dbusc))
    },
    err=>{console.log(err)}
    )
    this.collectionSize = this.usuarios.length
  }

  setUsuarioEliminar(id:string|null, nombre:string): void {
    this.idUsuarioEliminar = id==''? null : id
    this.nombreUsuarioEliminar = nombre
  }

  eliminarUsuario():void {
    if (this.idUsuarioEliminar!=null) {
        this.usuariosSrv.eliminarUsuario(this.idUsuarioEliminar).subscribe(data=>{
        console.log("Usuario eliminado")
        this.cargarUsuarios()
      }, error => {
        console.log(error);
      })
    }

  }



}
