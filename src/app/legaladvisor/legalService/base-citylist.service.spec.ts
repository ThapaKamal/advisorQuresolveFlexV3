import { TestBed } from '@angular/core/testing';

import { BaseCitylistService } from './base-citylist.service';

describe('BaseCitylistService', () => {
  let service: BaseCitylistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseCitylistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
