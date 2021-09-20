export class Pedido {
  id!: number;
  nome!: string;
  numero?: string;
  tipoOvo!: string;
  idTamanho!: number;
  idSaborUm!: number;
  idSaborDois?: number;
  idSaborTres?: number;
  idSaborQuatro?: number;
  idSaborCinco?: number;
  observacao?: string;
  preco?: number;
  // "entregar": "SIM",
  dataEntrega?: string;
  endereco?: string;
  ativo?: string;
}
