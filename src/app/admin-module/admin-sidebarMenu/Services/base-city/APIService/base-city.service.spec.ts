import { TestBed } from '@angular/core/testing';

import { BaseCityService } from './base-city.service';

describe('BaseCityService', () => {
  let service: BaseCityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseCityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
