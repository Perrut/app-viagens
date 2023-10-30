import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TabelaPesquisaItem } from '../tabela-pesquisa/tabela-pesquisa-datasource';

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

  @Output()
  filtroDefinido = new EventEmitter<TabelaPesquisaItem>();

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    const filtro: TabelaPesquisaItem = {
      documento: this.clienteForm.value.documento!,
      email: this.clienteForm.value.email!,
      nome: this.clienteForm.value.nome!
    };
    this.filtroDefinido.emit(filtro);
  }
}
