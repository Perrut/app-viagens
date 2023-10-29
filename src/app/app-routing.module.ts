import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BuscaClientesComponent } from './busca-clientes/busca-clientes.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: BuscaClientesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
