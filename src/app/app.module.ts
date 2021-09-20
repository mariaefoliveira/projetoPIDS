import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardapioPedidoComponent } from './paginas/cardapio-pedido/cardapio-pedido.component';
import { CardapioItemComponent } from './paginas/cardapio-item/cardapio-item.component';
import { PedidoFormComponent } from './paginas/pedido-form/pedido-form.component';
import { TipoComponent } from './tipo/tipo.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TamanhoComponent } from './tamanho/tamanho.component';

@NgModule({
  declarations: [
    AppComponent,
    CardapioPedidoComponent,
    CardapioItemComponent,
    PedidoFormComponent,
    TipoComponent,
    TamanhoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
