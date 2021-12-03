import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../servicios/usuario.service'
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../modelos/usuario'

@Component({
  selector: 'usuarios-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class UsuariosRegistroComponent implements OnInit {

  id:string | null = ""
  nombres:string =""
  apellidos:string = ""
  identificacion: string = ""
  direccion: string = ""
  celular: string = ""
  email: string = ""
  namemascota: string = ""
  fechanacimiento: string = ""
  raza: string =""


  constructor(private srv:UsuarioService, private aRoute:ActivatedRoute, private router:Router) {
      this.id = this.aRoute.snapshot.paramMap.get('id')
  }

  ngOnInit(): void {

      this.cargarUsuario()
  }

  cargarUsuario():void {
    if (this.id != null) {
      this.srv.cargarUsuario(this.id).subscribe(data=>{
        this.nombres=data.nombres
        this.apellidos=data.apellidos
        this.identificacion=data.identificacion
        this.direccion=data.direccion
        this.celular=data.celular
        this.email=data.email
        this.namemascota=data.mascotas.namemascota
        this.fechanacimiento=data.mascotas.fechanacimiento
        this.raza=data.mascotas.raza
      })
    }
  }

// **

  guardarUsuario():void {
    const usuario:Usuario = {
      _id: this.id,
      nombres: this.nombres,
      apellidos: this.apellidos,
      identificacion: this.identificacion,
      direccion: this.direccion,
      celular: this.celular,
      email: this.email,
      mascotas: {
        namemascota: this.namemascota,
        fechanacimiento: this.fechanacimiento,
        raza: this.raza
      }

    }
    if(this.id != null) {
      this.srv.actualizarUsuario(usuario).subscribe(data=>{
        console.log("Usuario ha sido  actualizado")
        this.router.navigate(['/usuarios']);
      })
    }
    else {
      this.srv.guardarNuevoUsuario(usuario).subscribe(data=>{
        console.log("Usuario nuevo guardado")
        this.router.navigate(['/usuarios']);
      })
    }
  }


}
