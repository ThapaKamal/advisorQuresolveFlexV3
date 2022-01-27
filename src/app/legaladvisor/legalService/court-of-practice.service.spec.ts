import { TestBed } from '@angular/core/testing';

import { CourtOfPracticeService } from './court-of-practice.service';

describe('CourtOfPracticeService', () => {
  let service: CourtOfPracticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourtOfPracticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
