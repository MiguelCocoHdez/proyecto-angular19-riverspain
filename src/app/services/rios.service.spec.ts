import { TestBed } from '@angular/core/testing';

import { RiosService } from './rios.service';

describe('RiosService', () => {
  let service: RiosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
