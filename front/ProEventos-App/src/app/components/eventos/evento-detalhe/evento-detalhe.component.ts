import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-evento-detalhe',
  templateUrl: './evento-detalhe.component.html',
  styleUrls: ['./evento-detalhe.component.scss'],
})
export class EventoDetalheComponent implements OnInit {
  formGroup = {} as FormGroup;

  get form(): any {
    return this.formGroup.controls;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.validation();
  }

  public resetForm(): void {
    this.formGroup.reset();
  }

  public validation(): void {
    this.formGroup = this.fb.group({
      tema: this.fb.control('', [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(50),
      ]),
      local: this.fb.control('', [Validators.required]),
      dataEvento: this.fb.control('', [Validators.required]),
      qtdPessoas: this.fb.control('', [
        Validators.required,
        Validators.max(120000),
      ]),
      telefone: this.fb.control('', [Validators.required]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      imagemURL: this.fb.control('', [Validators.required]),
    });

    // this.formGroup = this.fb.group({
    //   tema: [
    //     '',
    //     [
    //       Validators.required,
    //       Validators.minLength(4),
    //       Validators.maxLength(50),
    //     ],
    //   ],
    //   local: ['', Validators.required],
    //   dataEvento: ['', Validators.required],
    //   qtdPessoas: ['', [Validators.required, Validators.max(120000)]],
    //   telefone: ['', Validators.required],
    //   email: ['', [Validators.required, Validators.email]],
    //   imagemURL: ['', Validators.required],
    // });
  }
}
