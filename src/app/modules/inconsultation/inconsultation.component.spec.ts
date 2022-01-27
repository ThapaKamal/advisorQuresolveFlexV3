import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InconsultationComponent } from './inconsultation.component';

describe('InconsultationComponent', () => {
  let component: InconsultationComponent;
  let fixture: ComponentFixture<InconsultationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InconsultationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InconsultationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
