import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaOfPracticeComponent } from './area-of-practice.component';

describe('AreaOfPracticeComponent', () => {
  let component: AreaOfPracticeComponent;
  let fixture: ComponentFixture<AreaOfPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaOfPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaOfPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
