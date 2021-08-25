import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { EventoService } from 'src/app/services/evento.service';
import { Evento } from 'src/app/models/Evento';

@Component({
  selector: 'app-evento-lista',
  templateUrl: './evento-lista.component.html',
  styleUrls: ['./evento-lista.component.scss'],
})
export class EventoListaComponent implements OnInit {
  public modalRef = {} as BsModalRef;
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

  constructor(
    private eventoService: EventoService,
    private modalService: BsModalService,
    private toastrService: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  public ngOnInit(): void {
    this.getEventos();
    this.spinner.show();
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
    this.eventoService.getEventos().subscribe({
      next: (eventos: Evento[]) => {
        this.eventos = this.eventosFiltrados = eventos;
      },
      error: (error: any) => {
        this.spinner.hide();
        this.toastrService.error('Erro ao carregar eventos!', 'Erro!');
      },
      complete: () => this.spinner.hide(),
    });
  }

  public exibirImg(): void {
    this.exibeImg = !this.exibeImg;
  }

  public openModal(template: TemplateRef<any>): void {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  public confirm(): void {
    this.modalRef.hide();
    this.toastrService.success(
      'O evento foi deletado com sucesso.',
      'Deletado!'
    );
  }

  public decline(): void {
    this.modalRef.hide();
  }
}
