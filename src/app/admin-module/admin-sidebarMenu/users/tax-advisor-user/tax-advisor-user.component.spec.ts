import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxAdvisorUserComponent } from './tax-advisor-user.component';

describe('TaxAdvisorUserComponent', () => {
  let component: TaxAdvisorUserComponent;
  let fixture: ComponentFixture<TaxAdvisorUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxAdvisorUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxAdvisorUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
