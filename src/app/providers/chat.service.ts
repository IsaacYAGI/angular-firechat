import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Mensaje } from '../interfaces/mensaje.interface';

import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  public chats: Mensaje[] = [];
  private itemsCollection: AngularFirestoreCollection<Mensaje>;

  public usuario: any = {};
  constructor(
    private afs: AngularFirestore,
    public auth: AngularFireAuth
  ) {
    // this.itemsCollection = afs.collection<Mensaje>('chats');
    this.auth.authState.subscribe((user) =>{
      console.log('Estado del usuario:',user);

      if (!user) return;

      this.usuario.nombre = user.displayName;
      this.usuario.uid = user.uid;
    })
  }

  login(proveedor: string) {
    this.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.auth.signOut();
    this.usuario = {};
  }

  cargarMensajes(){
    this.itemsCollection = this.afs.collection<Mensaje>('chats', ref => ref
                                                                        .orderBy('fecha', "desc")
                                                                        .limit(5));

    return this.itemsCollection.valueChanges().pipe(

      map( (mensajes: Mensaje[]) =>{
        console.log(mensajes);
        this.chats = [];
        this.chats = mensajes.reverse();
      })
    );
     
  }

  agregarMensaje( texto: string ){
    //falta uid del usuario
    let mensaje: Mensaje = {
      nombre: "Demo",
      mensaje: texto,
      fecha: new Date().getTime()
    }

    return this.itemsCollection.add(mensaje);
  }
}
