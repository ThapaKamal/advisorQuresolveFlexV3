import { TestBed } from '@angular/core/testing';

import { AdvisorProfileService } from './advisor-profile.service';

describe('AdvisorProfileService', () => {
  let service: AdvisorProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdvisorProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
