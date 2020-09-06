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
  elemento: any;
  constructor(
    public chatsService: ChatService
  ) {
    this.chatsService.cargarMensajes().subscribe(
      () => {
        setTimeout(()=>{
          this.elemento.scrollTop = this.elemento.scrollHeight;

        },20)
      }
    );
   }

  ngOnInit(): void {
    this.elemento = document.getElementById("app-mensajes");
  }

  enviarMensaje(){
    console.log(this.mensaje);

    if(this.mensaje.length === 0) return;

    this.chatsService.agregarMensaje(this.mensaje)
      .then( () => this.mensaje = "")
      .catch( (err) => console.error('error',err));
  }

}
