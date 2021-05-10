import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss'],
})
export class TituloComponent implements OnInit {

  @Input() titulo = '';
  @Input() subTitulo = '';
  @Input() iconClass = 'fa fa-user';
  @Input() exibeBotaoListar = false;

  constructor() {}

  ngOnInit(): void {}
}
