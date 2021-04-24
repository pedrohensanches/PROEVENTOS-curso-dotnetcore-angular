import { Component, OnInit } from '@angular/core';
import { Evento } from '../models/Evento';
import { EventoService } from '../services/evento.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
  // providers: [EventoService]
})
export class EventosComponent implements OnInit {
  public eventos: Evento[] = [];
  public eventosFiltrados: Evento[] = [];
  public larguraImg = 150;
  public margenImg = 2;
  public exibeImg = false;
  private filtroListado = '';

  public get filtroLista(): string {
    return this.filtroListado;
  }

  public set filtroLista(v: string) {
    this.filtroListado = v;
    this.eventosFiltrados =
      this.filtroLista && this.filtroLista !== ''
        ? this.filtrarEventos(this.filtroLista)
        : this.eventos;
  }

  constructor(private eventoService: EventoService) {}

  public ngOnInit(): void {
    this.getEventos();
  }

  public filtrarEventos(query: string): Evento[] {
    query = query.toLocaleLowerCase();
    return this.eventos.filter(
      (e: any) =>
        e.tema.toLocaleLowerCase().indexOf(query) !== -1 ||
        e.local.toLocaleLowerCase().indexOf(query) !== -1
    );
  }

  public getEventos(): void {
    // tslint:disable-next-line: deprecation
    this.eventoService.getEventos().subscribe({
      next: (eventos: Evento[]) => {
        this.eventos = this.eventosFiltrados = eventos;
      },
      error: (error: any) => console.log(error),
    });
  }

  public exibirImg(): void {
    this.exibeImg = !this.exibeImg;
  }
}
