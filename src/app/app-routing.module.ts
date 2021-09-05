import { PedidoFormComponent } from './paginas/pedido-form/pedido-form.component';
import { CardapioPedidoComponent } from './paginas/cardapio-pedido/cardapio-pedido.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: CardapioPedidoComponent},
  {path: 'fazer-pedido', component: PedidoFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
