import { Component, OnInit } from '@angular/core';
import {Comentario} from '../clases/comentario';
import {ComentariosService} from '../servicios/comentarios.service';
import {AlertController} from '@ionic/angular';
@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  nombre:string;
  texto:string;
  carrera:string;

  constructor(public alertCtrl:AlertController
      ,public comService:ComentariosService) { }

  ngOnInit() {
  }
  async agregar(){
    let comentario:Comentario = {
      nombre: this.nombre,
      texto: this.texto,
      carrera: this.carrera
    };
    this.comService.agregar(comentario);//Para guardar comentario y mostrarlo en la otra pagina
    const alert = await this.alertCtrl.create({
      header: "Comentario Ingresado",
      message: "Comentario registrado",
      buttons:['Aceptar']
    });
    await alert.present();
  }
}
