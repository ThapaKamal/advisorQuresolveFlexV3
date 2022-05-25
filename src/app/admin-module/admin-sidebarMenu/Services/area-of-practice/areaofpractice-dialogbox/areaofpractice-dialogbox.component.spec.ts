import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaofpracticeDialogboxComponent } from './areaofpractice-dialogbox.component';

describe('AreaofpracticeDialogboxComponent', () => {
  let component: AreaofpracticeDialogboxComponent;
  let fixture: ComponentFixture<AreaofpracticeDialogboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaofpracticeDialogboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaofpracticeDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
