import { Component, OnInit } from '@angular/core';
import { EXAMPLE_DATA, FILTERED_DATA, TabelaPesquisaItem } from '../tabela-pesquisa/tabela-pesquisa-datasource';

@Component({
  selector: 'app-busca-clientes',
  templateUrl: './busca-clientes.component.html',
  styleUrls: ['./busca-clientes.component.scss']
})
export class BuscaClientesComponent implements OnInit {

  dadosResultadoBusca: TabelaPesquisaItem[] = EXAMPLE_DATA;

  constructor() { }

  ngOnInit(): void {
  }

  onFiltroDefinido(filtro: TabelaPesquisaItem) {
    if (this.dadosResultadoBusca.length === EXAMPLE_DATA.length)
      this.dadosResultadoBusca = [...FILTERED_DATA];
    else
      this.dadosResultadoBusca = [...EXAMPLE_DATA];
  }
}
