import { TestBed } from '@angular/core/testing';

import { GenderListService } from './gender-list.service';

describe('GenderListService', () => {
  let service: GenderListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenderListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
