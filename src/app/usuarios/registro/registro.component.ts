import { Component, OnInit } from '@angular/core';
import { ServiuserService } from '../servicios/serviuser.service';

import { ActivatedRoute } from '@angular/router'; //para capturar el id encontrado en la barra de direccion, se debe imyectar
import { Usuario } from '../modelos/usuario';


@Component({
  selector: 'registro-component',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class UsuariosRegistroComponent implements OnInit {

    id:string | null =""
    nombres:string = ""
    apellidos:string = ""
    identificacion:string = ""

    constructor(private srv:ServiuserService, private rutaActiva:ActivatedRoute) {
      this.id = this.rutaActiva.snapshot.paramMap.get('id')
    }

    ngOnInit(): void {
      this.cargarUsuario()
    }

    cargarUsuario():void{
      this.srv.cargarUsuario(this.id).subscribe(data=>{
            this.nombres = data.nombres
            this.apellidos =data.apellidos
            this.identificacion =data.identificacion
            console.log("Nombres cargado desde consola: " +data.nombres)
          })

    }
  }
