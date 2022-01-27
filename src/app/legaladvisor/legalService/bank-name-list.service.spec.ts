import { TestBed } from '@angular/core/testing';

import { BankNameListService } from './bank-name-list.service';

describe('BankNameListService', () => {
  let service: BankNameListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankNameListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
