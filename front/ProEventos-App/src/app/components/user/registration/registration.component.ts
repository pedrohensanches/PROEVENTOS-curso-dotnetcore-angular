import { Component, OnInit } from '@angular/core';
import {
  AbstractControlOptions,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ValidatorField } from '@app/helpers/ValidatorField';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
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
    const formOptions: AbstractControlOptions = {
      validators: ValidatorField.MustMatch('senha', 'confirmeSenha'),
    };

    this.formGroup = this.fb.group(
      {
        primeiroNome: this.fb.control('', [Validators.required]),
        ultimoNome: this.fb.control('', [Validators.required]),
        email: this.fb.control('', [Validators.required, Validators.email]),
        userName: this.fb.control('', [Validators.required]),
        senha: this.fb.control('', [
          Validators.required,
          Validators.minLength(6),
        ]),
        confirmeSenha: this.fb.control('', [
          Validators.required,
          Validators.minLength(6),
        ]),
      },
      formOptions
    );
  }
}
