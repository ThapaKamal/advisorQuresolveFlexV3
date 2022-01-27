import { TestBed } from '@angular/core/testing';

import { BarMembershipListService } from './bar-membership-list.service';

describe('BarMembershipListService', () => {
  let service: BarMembershipListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BarMembershipListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
