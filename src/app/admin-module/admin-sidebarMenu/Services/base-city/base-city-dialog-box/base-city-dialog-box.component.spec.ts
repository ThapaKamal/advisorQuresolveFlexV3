import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCityDialogBoxComponent } from './base-city-dialog-box.component';

describe('BaseCityDialogBoxComponent', () => {
  let component: BaseCityDialogBoxComponent;
  let fixture: ComponentFixture<BaseCityDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseCityDialogBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCityDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
