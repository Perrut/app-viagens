import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscaClientesComponent } from './busca-clientes/busca-clientes.component';
import { NavegacaoAppComponent } from './navegacao-app/navegacao-app.component';
import { FuncionalidadeNaoImplementadaComponent } from './funcionalidade-nao-implementada/funcionalidade-nao-implementada.component';

const routes: Routes = [
  { 
    path: '', 
    component: NavegacaoAppComponent, 
    children: [
      { path: '', component: BuscaClientesComponent },
      { path: 'clientes', component: BuscaClientesComponent },
      { path: '**', component: FuncionalidadeNaoImplementadaComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
