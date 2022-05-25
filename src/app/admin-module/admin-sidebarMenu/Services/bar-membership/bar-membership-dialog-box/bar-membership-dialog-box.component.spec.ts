import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarMembershipDialogBoxComponent } from './bar-membership-dialog-box.component';

describe('BarMembershipDialogBoxComponent', () => {
  let component: BarMembershipDialogBoxComponent;
  let fixture: ComponentFixture<BarMembershipDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarMembershipDialogBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarMembershipDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
