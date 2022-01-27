import { TestBed } from '@angular/core/testing';

import { AreaOfPraticeListService } from './area-of-pratice-list.service';

describe('AreaOfPraticeListService', () => {
  let service: AreaOfPraticeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaOfPraticeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
