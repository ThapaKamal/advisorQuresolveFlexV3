import { TestBed } from '@angular/core/testing';

import { AreaofpracticeService } from './areaofpractice.service';

describe('AreaofpracticeService', () => {
  let service: AreaofpracticeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaofpracticeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
