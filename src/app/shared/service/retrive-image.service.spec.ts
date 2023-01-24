import { TestBed } from '@angular/core/testing';

import { RetriveImageService } from './retrive-image.service';

describe('RetriveImageService', () => {
  let service: RetriveImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetriveImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
