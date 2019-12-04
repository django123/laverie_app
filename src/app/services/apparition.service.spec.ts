import { TestBed } from '@angular/core/testing';

import { ApparitionService } from './apparition.service';

describe('ApparitionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApparitionService = TestBed.get(ApparitionService);
    expect(service).toBeTruthy();
  });
});
