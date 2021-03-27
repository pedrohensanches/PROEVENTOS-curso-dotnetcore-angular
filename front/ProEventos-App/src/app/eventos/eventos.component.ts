import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss'],
})
export class EventosComponent implements OnInit {
  public eventos: any = [];
  public eventosFiltrados: any = [];
  larguraImg = 150;
  margenImg = 2;
  exibeImg = false;
  private _filtroLista: string = '';

  public get filtroLista(): string {
    return this._filtroLista;
  }

  public set filtroLista(v: string) {
    this._filtroLista = v;
    this.eventosFiltrados =
      this.filtroLista && this.filtroLista !== ''
        ? this.filtrarEventos(this.filtroLista)
        : this.eventos;
  }

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getEventos();
  }

  public filtrarEventos(query: string): any {
    query = query.toLocaleLowerCase();
    return this.eventos.filter(
      (e: any) =>
        e.tema.toLocaleLowerCase().indexOf(query) !== -1 ||
        e.local.toLocaleLowerCase().indexOf(query) !== -1
    );
  }

  public getEventos(): void {
    this.http.get('https://localhost:5001/api/eventos').subscribe(
      (response) => (this.eventos = this.eventosFiltrados = response),
      (error) => console.log(error)
    );
  }

  public exibirImg(): void {
    this.exibeImg = !this.exibeImg;
  }
}
