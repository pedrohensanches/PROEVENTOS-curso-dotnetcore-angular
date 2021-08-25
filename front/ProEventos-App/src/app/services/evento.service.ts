import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../models/Evento';

// As três maneiras de injetar um componente

// Injetável em qualquer componente
// @Injectable({
//   providedIn: 'root',
// })

@Injectable()
// No componente que for usar o serviço
// @Component({
//   selector: 'app-eventos',
//   templateUrl: '...',
//   styleUrls: ['...'],
//   providers: [EventoService]
// })

// No módulo que for utilizar (Mais comum)
// @NgModule({
//   declarations: [ ... ],
//   imports: [ ... ],
//   providers: [EventoService],
// })
export class EventoService {
  baseURL = 'https://localhost:5001/api/eventos';

  constructor(private http: HttpClient) {}

  public getEventos(): Observable<Evento[]> {
    // O http.get('url') retorna um Observable

    // O Angular tem uma integração muito boa com o RxJS,
    // que é uma biblioteca para compor programas assíncronos e baseados em eventos usando sequências observáveis.
    // Em RxJS tem um objeto Observable, que emite itens ou envia notificações
    // para seus observadores(observers) chamando os métodos dos observadores.

    // Ao se inscrever (subscribe) em um Observable, a inscrição se mantém
    // enquanto a aplicação não tiver sido destruída, ou até se desinscrever.
    return this.http.get<Evento[]>(this.baseURL);
  }

  public getEventosByTema(tema: string): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.baseURL}/tema/${tema}`);
  }

  public getEventoById(id: number): Observable<Evento> {
    return this.http.get<Evento>(`${this.baseURL}/${id}`);
  }
}
