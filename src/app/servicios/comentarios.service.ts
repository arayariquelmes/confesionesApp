import { Injectable } from '@angular/core';
import {Comentario} from '../clases/comentario';
@Injectable({
  providedIn: 'root'
})
export class ComentariosService {
  //Crea una lista para guardar comentarios
  comentarios:Comentario[] =[];
  constructor() { }
  public agregar(comentario:Comentario){
    this.comentarios.push(comentario);
  }
  public obtener(){
    return this.comentarios;
  }
}
