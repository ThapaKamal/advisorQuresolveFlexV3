import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageDialogBoxComponent } from './language-dialog-box.component';

describe('LanguageDialogBoxComponent', () => {
  let component: LanguageDialogBoxComponent;
  let fixture: ComponentFixture<LanguageDialogBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LanguageDialogBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageDialogBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
