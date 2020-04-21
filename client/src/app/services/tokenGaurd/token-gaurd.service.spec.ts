import { TestBed } from '@angular/core/testing';

import { TokenGaurdService } from './token-gaurd.service';

describe('TokenGaurdService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenGaurdService = TestBed.get(TokenGaurdService);
    expect(service).toBeTruthy();
  });
});
