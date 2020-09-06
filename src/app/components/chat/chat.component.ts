import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/providers/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styles: [
  ]
})
export class ChatComponent implements OnInit {

  mensaje: string = "";
  constructor(
    public chatsService: ChatService
  ) {
    this.chatsService.cargarMensajes().subscribe();
   }

  ngOnInit(): void {
  }

  enviarMensaje(){
    console.log(this.mensaje);

    if(this.mensaje.length === 0) return;

    this.chatsService.agregarMensaje(this.mensaje)
      .then( () => this.mensaje = "")
      .catch( (err) => console.error('error',err));
  }

}
