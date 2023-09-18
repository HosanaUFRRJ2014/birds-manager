import { TestBed } from '@angular/core/testing';

import { BirdWeightService } from './bird-weight.service';

describe('BirdWeightService', () => {
  let service: BirdWeightService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BirdWeightService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
