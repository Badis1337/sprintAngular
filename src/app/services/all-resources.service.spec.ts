import { TestBed } from '@angular/core/testing';

import { AllResourcesService } from './all-resources.service';

describe('AllResourcesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AllResourcesService = TestBed.get(AllResourcesService);
    expect(service).toBeTruthy();
  });
});
