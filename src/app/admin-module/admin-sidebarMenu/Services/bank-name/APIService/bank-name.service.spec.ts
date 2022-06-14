import { TestBed } from '@angular/core/testing';

import { BankNameService } from './bank-name.service';

describe('BankNameService', () => {
  let service: BankNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
