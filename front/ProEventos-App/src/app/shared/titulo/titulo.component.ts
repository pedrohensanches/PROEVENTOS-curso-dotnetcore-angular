import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss'],
})
export class TituloComponent implements OnInit {
  // Ao utilizar o component que contém decorator @Input(), o que vai entre as aspas é como se fosse o javascript,
  // por isso que utiliza " 'título' "
  // <app-titulo [titulo]="'valor string'" ></app-titulo>
  // <app-titulo [quantidade]='2' ></app-titulo>

  @Input() titulo = '';
  @Input() subTitulo = '';
  @Input() iconClass = 'fa fa-user';
  @Input() exibeBotaoListar = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  listar(): void {
    this.router.navigate([`/${this.titulo.toLocaleLowerCase()}/lista`]);
  }
}
