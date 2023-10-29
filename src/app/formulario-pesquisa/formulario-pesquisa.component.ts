import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-pesquisa',
  templateUrl: './formulario-pesquisa.component.html',
  styleUrls: ['./formulario-pesquisa.component.scss']
})
export class FormularioPesquisaComponent {
  clienteForm = this.fb.group({
    nome: [null, Validators.required],
    documento: [null, Validators.required],
    email: [null, Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    console.log('Pesquisa em andamento.');
  }
}
