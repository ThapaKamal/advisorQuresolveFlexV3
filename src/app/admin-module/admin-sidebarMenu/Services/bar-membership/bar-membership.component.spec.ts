import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarMembershipComponent } from './bar-membership.component';

describe('BarMembershipComponent', () => {
  let component: BarMembershipComponent;
  let fixture: ComponentFixture<BarMembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarMembershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
