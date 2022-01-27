import { TestBed } from '@angular/core/testing';

import { TypeOfDegreeListService } from './type-of-degree-list.service';

describe('TypeOfDegreeListService', () => {
  let service: TypeOfDegreeListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeOfDegreeListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
