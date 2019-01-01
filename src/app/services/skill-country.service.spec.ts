import { TestBed } from '@angular/core/testing';

import { SkillCountryService } from './skill-country.service';

describe('SkillCountryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SkillCountryService = TestBed.get(SkillCountryService);
    expect(service).toBeTruthy();
  });
});
