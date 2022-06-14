import { TestBed } from '@angular/core/testing';

import { BarMembershipService } from './bar-membership.service';

describe('BarMembershipService', () => {
  let service: BarMembershipService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarMembershipService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
