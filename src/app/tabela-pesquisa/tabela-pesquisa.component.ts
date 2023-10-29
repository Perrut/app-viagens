import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { TabelaPesquisaDataSource, TabelaPesquisaItem } from './tabela-pesquisa-datasource';

@Component({
  selector: 'app-tabela-pesquisa',
  templateUrl: './tabela-pesquisa.component.html',
  styleUrls: ['./tabela-pesquisa.component.scss']
})
export class TabelaPesquisaComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TabelaPesquisaItem>;
  dataSource: TabelaPesquisaDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nome', 'documento', 'email'];

  constructor() {
    this.dataSource = new TabelaPesquisaDataSource();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
