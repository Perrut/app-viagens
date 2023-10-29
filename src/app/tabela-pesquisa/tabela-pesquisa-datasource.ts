import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TabelaPesquisaItem {
  nome: string;
  documento: number;
  email: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TabelaPesquisaItem[] = [
  {documento: 91868912000, nome: 'Ellas', email: 'koipul@email.com'},
  {documento: 33591779083, nome: 'Premhuo', email: 'wiwaer@email.com'},
  {documento: 98690771026, nome: 'Urzyo', email: 'waousn@email.com'},
  {documento: 63269808011, nome: 'Doikatoi', email: 'zyecli@email.com'},
  {documento: 17982385001, nome: 'Xiwibor', email: 'beuger@email.com'},
  {documento: 25428871016, nome: 'Lezos', email: 'enflol@email.com'},
  {documento: 50199382034, nome: 'Sasiam', email: 'ficugo@email.com'},
  {documento: 92643327071, nome: 'Uragkaouma', email: 'wauwur@email.com'},
  {documento: 93551216010, nome: 'Urnou', email: 'devivu@email.com'},
  {documento: 56842208009, nome: 'Fosue', email: 'zufaca@email.com'},
];

/**
 * Data source for the TabelaPesquisa view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TabelaPesquisaDataSource extends DataSource<TabelaPesquisaItem> {
  data: TabelaPesquisaItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TabelaPesquisaItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TabelaPesquisaItem[]): TabelaPesquisaItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TabelaPesquisaItem[]): TabelaPesquisaItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'nome': return compare(a.nome, b.nome, isAsc);
        case 'documento': return compare(+a.documento, +b.documento, isAsc);
        case 'email': return compare(+a.email, +b.email, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
