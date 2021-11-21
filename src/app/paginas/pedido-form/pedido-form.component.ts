import { Component, OnInit } from '@angular/core';
import {PedidoService} from "../shared/pedido.service";
import {Sabor} from "../shared/sabor";
import {Tamanho} from "../shared/tamanho";
import {Pedido} from "../shared/pedido";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pedido-form',
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.css']
})
export class PedidoFormComponent implements OnInit {

  public pedido: Pedido = new Pedido();
  public tamanhos: Tamanho[] = [];
  public sabores: Sabor[] = [];


  ngOnInit(): void {
    this.buscarSabores();
    this.buscarTamanhos();

    const id = this.activatedRoute.snapshot.params['id'];

    if(id){
      this.pedidoService.getPedido(id).subscribe( (data: Pedido) => {
        console.log('Pedido get: ', data),
          this.pedido = data;
      })
    }

  }

  constructor(
    private pedidoService: PedidoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,) { }

  private buscarSabores() {

      this.pedidoService.getSabores().subscribe(result => {
        this.sabores = result;
        console.log(result);
      },
      erro => {
        //Deixar mensagem amigavel
      }
    );
  }

  private buscarTamanhos() {
    this.pedidoService.getTamanhos().subscribe(result => {
        this.tamanhos = result;
        console.log(result);
      },
      erro => {
        //Deixar mensagem amigavel
      }
    );
  }

  salvarPedido(){
    if(this.pedido.nome == null || this.pedido.nome.length < 5){
      window.alert("Nome não pode ser vazio e deve ter mais de 4 caracteres");
    }else if(!this.pedido.tipoOvo){

    window.alert("O tipo do ovo não pode ser vazio");

    }else if(!this.pedido.idTamanho){
      window.alert("O tamanho não pode ser vazio");
    }else if(!this.pedido.idSaborUm&&!this.pedido.idSaborDois&&!this.pedido.idSaborTres
      &&!this.pedido.idSaborQuatro&&!this.pedido.idSaborCinco){
      window.alert("Deve escolher ao menos 1 sabor");
    }else if(!this.pedido.tipoOvo){
      window.alert("Deve escolher o tipo de ovo");

    } else {
      if(window.confirm("Salvar dados?")){
        this.pedidoService.salvarPedido(this.pedido).subscribe( data => {

          this.router.navigate([''])
        }, erro => {

          window.alert("Por favor. Verifique os campos."); //Mensagem amigavel
        })
      }
    }
  }


}
