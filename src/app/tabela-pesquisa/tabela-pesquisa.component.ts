import { AfterViewInit, Component, Input, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { TabelaPesquisaItem } from './tabela-pesquisa-datasource';

@Component({
  selector: 'app-tabela-pesquisa',
  templateUrl: './tabela-pesquisa.component.html',
  styleUrls: ['./tabela-pesquisa.component.scss']
})
export class TabelaPesquisaComponent implements AfterViewInit, OnChanges {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TabelaPesquisaItem>;
  dataSource: MatTableDataSource<TabelaPesquisaItem>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['nome', 'documento', 'email'];

  isLoading = false;

  @Input()
  dadosPesquisa: TabelaPesquisaItem[] = [];

  constructor() {
    this.dataSource = new MatTableDataSource(this.dadosPesquisa);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['dadosPesquisa']) {
      this.isLoading = true;
      setTimeout(() => {
        this.dataSource.data = [...this.dadosPesquisa];
        this.isLoading = false;
      }, 2000);
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
