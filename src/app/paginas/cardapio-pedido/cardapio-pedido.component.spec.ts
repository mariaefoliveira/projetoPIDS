import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardapioPedidoComponent } from './cardapio-pedido.component';

describe('CardapioPedidoComponent', () => {
  let component: CardapioPedidoComponent;
  let fixture: ComponentFixture<CardapioPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardapioPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardapioPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
