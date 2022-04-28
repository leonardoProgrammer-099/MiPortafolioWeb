import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../servicios/firebase.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(private firebase : FirebaseService) { }

  ngOnInit(): void {
  }

  nombre : string =""
  correo : string =""
  mensaje : string =""
  async EnviaMensaje(){
    await this.firebase.guardarMensaje(this.nombre,this.correo, this.mensaje).then(() => {
      location.reload();
    });
  
  }
}
