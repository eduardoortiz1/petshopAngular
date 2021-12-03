import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../modelos/usuario'

@Injectable({
  providedIn: 'root'
})
export class  ServiuserService{

  constructor(private http:HttpClient) { }

  private rutaAPI:string = "http://localhost:3000/api/usuarios/"

  cargarUsuarios():Observable<any> {
    return this.http.get(this.rutaAPI)
  }

  cargarUsuario(id:string|null):Observable<any> {
    return this.http.get(this.rutaAPI+id)
  }

  guardarUsuario(usuario:Usuario):Observable<any>{
    return this.http.post(this.rutaAPI, usuario)
  }

  actualizarUsuario(usuario:Usuario):Observable<any>{
    return this.http.put(this.rutaAPI+ usuario._id, usuario)

  }
  borrarUsuario(id:string):Observable<any> {
    return this.http.delete(this.rutaAPI+id)
  }
}
