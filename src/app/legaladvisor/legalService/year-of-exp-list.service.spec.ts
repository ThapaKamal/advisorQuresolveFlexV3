import { TestBed } from '@angular/core/testing';

import { YearOfExpListService } from './year-of-exp-list.service';

describe('YearOfExpListService', () => {
  let service: YearOfExpListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YearOfExpListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
