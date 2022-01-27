import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsulationhistoryComponent } from './consulationhistory.component';

describe('ConsulationhistoryComponent', () => {
  let component: ConsulationhistoryComponent;
  let fixture: ComponentFixture<ConsulationhistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsulationhistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsulationhistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
