import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Sabor} from "./sabor";
import {catchError, tap} from "rxjs/operators";
import {Tamanho} from "./tamanho";
import {Pedido} from "./pedido";

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}
@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private URL_SABOR_SERVICE: string = environment.apiURL+'/sabor';

  private URL_TAMANHO_SERVICE: string = environment.apiURL+'/tamanho';

  private URL_PEDIDO_SERVICE: string = environment.apiURL+'/pedido';


  constructor(private http: HttpClient) { }

  getSabores(): Observable<Sabor[]>{
    return this.http.get<Sabor[]>(this.URL_SABOR_SERVICE).pipe(
      tap( (sabores) => console.log('leu sabores: ', sabores))
    )
  }

  getTamanhos(): Observable<Tamanho[]>{
    return this.http.get<Tamanho[]>(this.URL_TAMANHO_SERVICE).pipe(
      tap( (tamanhos) => console.log('leu tamanhos: ', tamanhos))
    )
  }

  getPedido(id: number): Observable<Pedido>{
    return this.http.get<Pedido>(this.URL_SABOR_SERVICE +'/'+id).pipe(
      tap((sabor) => console.log('get sabor: ', sabor))
    )
  }

  salvarPedido(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(this.URL_PEDIDO_SERVICE, JSON.stringify(pedido), httpOptions).pipe(
      tap((pedido) => console.log('criar sabor: ', pedido))
    )
  }

}
