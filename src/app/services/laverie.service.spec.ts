import { TestBed } from '@angular/core/testing';

import { LaverieService } from './laverie.service';

describe('LaverieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LaverieService = TestBed.get(LaverieService);
    expect(service).toBeTruthy();
  });
});
