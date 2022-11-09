import { TestBed } from '@angular/core/testing';

import { ProbandoServicioService } from './probando-servicio.service';

describe('ProbandoServicioService', () => {
  let service: ProbandoServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProbandoServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
