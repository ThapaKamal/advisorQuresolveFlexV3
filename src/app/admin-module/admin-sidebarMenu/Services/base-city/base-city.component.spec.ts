import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCityComponent } from './base-city.component';

describe('BaseCityComponent', () => {
  let component: BaseCityComponent;
  let fixture: ComponentFixture<BaseCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseCityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
