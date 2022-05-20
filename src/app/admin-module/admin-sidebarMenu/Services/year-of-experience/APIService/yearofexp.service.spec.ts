import { TestBed } from '@angular/core/testing';

import { YearofexpService } from './yearofexp.service';

describe('YearofexpService', () => {
  let service: YearofexpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(YearofexpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
