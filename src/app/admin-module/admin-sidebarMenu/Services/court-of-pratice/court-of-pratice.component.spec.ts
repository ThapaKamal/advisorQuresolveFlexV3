import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourtOfPraticeComponent } from './court-of-pratice.component';

describe('CourtOfPraticeComponent', () => {
  let component: CourtOfPraticeComponent;
  let fixture: ComponentFixture<CourtOfPraticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourtOfPraticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourtOfPraticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
