import { TestBed } from '@angular/core/testing';

import { BatidasService } from './batidas.service';

describe('BatidasService', () => {
  let service: BatidasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatidasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
