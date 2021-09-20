import { TestBed } from '@angular/core/testing';

import { TipoOvoService } from './tipo-ovo.service';

describe('TipoOvoService', () => {
  let service: TipoOvoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TipoOvoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
