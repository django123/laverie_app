import { TestBed } from '@angular/core/testing';

import { ConsomationService } from './consomation.service';

describe('ConsomationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsomationService = TestBed.get(ConsomationService);
    expect(service).toBeTruthy();
  });
});
