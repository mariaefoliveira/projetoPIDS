import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardapioPedidoComponent } from './paginas/cardapio-pedido/cardapio-pedido.component';
import { CardapioItemComponent } from './paginas/cardapio-item/cardapio-item.component';
import { PedidoFormComponent } from './paginas/pedido-form/pedido-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CardapioPedidoComponent,
    CardapioItemComponent,
    PedidoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
