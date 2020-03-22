import { TestBed } from '@angular/core/testing';

import { BrewerApiService } from './brewer-api.service';

describe('BrewerApiService', () => {
  let service: BrewerApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrewerApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
