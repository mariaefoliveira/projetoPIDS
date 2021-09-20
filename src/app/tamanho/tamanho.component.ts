import { TamanhoService } from './shared/tamanho.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tamanho',
  templateUrl: './tamanho.component.html',
  styleUrls: ['./tamanho.component.css']
})
export class TamanhoComponent {

  public tamanhos!: any[];

  constructor(
    route: ActivatedRoute,
    private tamanhoService: TamanhoService
    ) {
    this.carregaTamanhos();
  }

  public carregaTamanhos(): void {
    this.tamanhoService.getTamanhos().subscribe(
      data => {
        this.tamanhos = data;
      }
    )
    console.log(this.tamanhos);
  }

}
