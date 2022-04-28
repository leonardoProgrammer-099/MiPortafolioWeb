import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
private ColletionMensaje : AngularFirestoreCollection<any>;
  constructor(private readonly afs: AngularFirestore) { 
    this.ColletionMensaje =afs.collection<any>('Mensajes');
  }

  async guardarMensaje(Nombre: string, correo: string, Mensaje: string){
    await this.ColletionMensaje.doc().set({
        Nombre: Nombre,
        Correo: correo,
        Mensaje: Mensaje
      }).then(() => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Mensaje enviado',
          showConfirmButton: false,
          timer: 1500
        })
      }).catch(() => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Ocurrio un error al mandar mensaje, vuelve a intentarlo mas tarde',
          showConfirmButton: false,
          timer: 1500
        })
      })
  }
}
