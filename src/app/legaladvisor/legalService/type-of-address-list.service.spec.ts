import { TestBed } from '@angular/core/testing';

import { TypeOfAddressListService } from './type-of-address-list.service';

describe('TypeOfAddressListService', () => {
  let service: TypeOfAddressListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeOfAddressListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
