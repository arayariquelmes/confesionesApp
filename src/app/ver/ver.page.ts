import { Component, OnInit } from '@angular/core';
import {Comentario} from '../clases/comentario';
import {ComentariosService} from '../servicios/comentarios.service';
@Component({
  selector: 'app-ver',
  templateUrl: './ver.page.html',
  styleUrls: ['./ver.page.scss'],
})
export class VerPage implements OnInit {

  comentarios:Comentario[]=[];
  constructor(public comService:ComentariosService) { }

  ngOnInit() {
    this.comentarios = this.comService.obtener();
  }

}
