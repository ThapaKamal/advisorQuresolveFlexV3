import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxRegistrationComponent } from './tax-registration.component';

describe('TaxRegistrationComponent', () => {
  let component: TaxRegistrationComponent;
  let fixture: ComponentFixture<TaxRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxRegistrationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
