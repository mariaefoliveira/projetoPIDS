import { Cardapio } from './../shared/cardapio';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cardapio-pedido',
  templateUrl: './cardapio-pedido.component.html',
  styleUrls: ['./cardapio-pedido.component.css']
})
export class CardapioPedidoComponent implements OnInit {

  cardapio: Cardapio[] = [];

  constructor( ) { }

  ngOnInit(): void {
    this.preencheDados();
  }

  private preencheDados() {
    this.cardapio.push({tipoOvo: 'Simples', peso: 100, valor: 10});
    this.cardapio.push({tipoOvo: 'Simples', peso: 150, valor: 10});
    this.cardapio.push({tipoOvo: 'Simples', peso: 250, valor: 10});
    this.cardapio.push({tipoOvo: 'Simples', peso: 350, valor: 10});
    this.cardapio.push({tipoOvo: 'Simples', peso: 500, valor: 10});



    this.cardapio.push({tipoOvo: 'Trufado', peso: 100, valor: 10});
    this.cardapio.push({tipoOvo: 'Trufado', peso: 150, valor: 10});
    this.cardapio.push({tipoOvo: 'Trufado', peso: 250, valor: 10});
    this.cardapio.push({tipoOvo: 'Trufado', peso: 350, valor: 10});
    this.cardapio.push({tipoOvo: 'Trufado', peso: 500, valor: 10});



    this.cardapio.push({tipoOvo: 'Colher', peso: 150, valor: 10});
    this.cardapio.push({tipoOvo: 'Colher', peso: 250, valor: 10});
    this.cardapio.push({tipoOvo: 'Colher', peso: 350, valor: 10});
    this.cardapio.push({tipoOvo: 'Colher', peso: 500, valor: 10});
  }

}
