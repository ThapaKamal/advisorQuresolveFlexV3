import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalAdvisorUserComponent } from './legal-advisor-user.component';

describe('LegalAdvisorUserComponent', () => {
  let component: LegalAdvisorUserComponent;
  let fixture: ComponentFixture<LegalAdvisorUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalAdvisorUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalAdvisorUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
