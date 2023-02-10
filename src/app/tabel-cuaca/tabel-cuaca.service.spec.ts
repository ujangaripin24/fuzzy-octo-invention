import { TestBed } from '@angular/core/testing';

import { TabelCuacaService } from './tabel-cuaca.service';

describe('TabelCuacaService', () => {
  let service: TabelCuacaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabelCuacaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
