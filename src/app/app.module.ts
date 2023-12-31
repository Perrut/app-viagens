import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioPesquisaComponent } from './formulario-pesquisa/formulario-pesquisa.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { TabelaPesquisaComponent } from './tabela-pesquisa/tabela-pesquisa.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BuscaClientesComponent } from './busca-clientes/busca-clientes.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { NavegacaoAppComponent } from './navegacao-app/navegacao-app.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FuncionalidadeNaoImplementadaComponent } from './funcionalidade-nao-implementada/funcionalidade-nao-implementada.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioPesquisaComponent,
    TabelaPesquisaComponent,
    BuscaClientesComponent,
    NavegacaoAppComponent,
    FuncionalidadeNaoImplementadaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
