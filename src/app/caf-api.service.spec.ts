import { TestBed } from '@angular/core/testing';

import { CafApiService } from './caf-api.service';

describe('CafApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CafApiService = TestBed.get(CafApiService);
    expect(service).toBeTruthy();
  });
});
