import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Usuario } from '../modelos/usuario'

import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }
  private URL:string = "http://localhost:3000/api/usuarios/"

  cargarUsuarios():Observable<any> {
    return this.http.get(this.URL)
  }

  cargarUsuario(id:string|null):Observable<any> {
    return this.http.get(this.URL+id)
  }

  guardarNuevoUsuario(usuario:Usuario):Observable<any> {
    return this.http.post(this.URL, usuario)
  }

  actualizarUsuario(usuario:Usuario):Observable<any> {
    return this.http.put(this.URL+usuario._id, usuario)
  }

  eliminarUsuario(id:string):Observable<any> {
    return this.http.delete(this.URL+id)
  }
}
