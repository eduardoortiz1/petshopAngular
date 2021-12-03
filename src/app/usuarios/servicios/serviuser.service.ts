import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiuserService {
  private URL:string="http://localhost:3000/api/usuarios"

  constructor(private http:HttpClient) { }

  listarUsuarios():Observable<any>{
    return this.http.get(this.URL)
  }
}
