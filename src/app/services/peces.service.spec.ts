import { TestBed } from '@angular/core/testing';

import { PecesService } from './peces.service';

describe('PecesService', () => {
  let service: PecesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PecesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
