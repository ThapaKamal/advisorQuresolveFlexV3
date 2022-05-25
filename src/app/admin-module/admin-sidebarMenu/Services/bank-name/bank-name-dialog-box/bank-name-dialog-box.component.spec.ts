import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankNameDialogBoxComponent } from './bank-name-dialog-box.component';

describe('BankNameDialogBoxComponent', () => {
  let component: BankNameDialogBoxComponent;
  let fixture: ComponentFixture<BankNameDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankNameDialogBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankNameDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
