import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearofexpDialogboxComponent } from './yearofexp-dialogbox.component';

describe('YearofexpDialogboxComponent', () => {
  let component: YearofexpDialogboxComponent;
  let fixture: ComponentFixture<YearofexpDialogboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YearofexpDialogboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YearofexpDialogboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
